import { useContext } from 'react';

import { ThemeContext } from './theme-provider';

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used inside AppThemeProvider');
  }

  return context;
};
