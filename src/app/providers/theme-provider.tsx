import type { PropsWithChildren } from 'react';
import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  APP_THEMES,
  type AppTheme,
  DEFAULT_COLORFUL_THEME,
} from '@/constants/theme';
import { themes } from '@/shared/styles/theme';

interface ThemeContextValue {
  currentTheme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const THEME_STORAGE_KEY = 'app-theme';

const isValidTheme = (theme: string): theme is AppTheme => theme in themes;

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme && isValidTheme(savedTheme)) {
      return savedTheme;
    }

    return DEFAULT_COLORFUL_THEME ?? APP_THEMES.dark;
  });

  const handleThemeChange = (theme: AppTheme) => {
    setCurrentTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  const contextValue = useMemo(
    () => ({
      currentTheme,
      setTheme: handleThemeChange,
    }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
