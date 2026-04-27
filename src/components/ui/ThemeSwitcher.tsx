import { useEffect, useMemo, useRef, useState } from 'react';

import { useAppTheme } from '@/app/providers/useAppTheme';
import {
  APP_THEMES,
  type AppTheme,
  COLORFUL_THEMES,
  type ColorfulTheme,
  DEFAULT_COLORFUL_THEME,
} from '@/constants/theme';
import { themes } from '@/shared/styles/theme';

import {
  ModeButton,
  ModeButtons,
  PaletteButton,
  PaletteGrid,
  PaletteTitle,
  ThemePopover,
  ThemeSwitcherContainer,
  ThemeTriggerButton,
  ThemeTriggerDot,
  ThemeTriggerLabel,
} from './ThemeSwitcher.styled';

const isColorfulTheme = (theme: AppTheme): theme is ColorfulTheme =>
  COLORFUL_THEMES.includes(theme as ColorfulTheme);

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useAppTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [lastColorfulTheme, setLastColorfulTheme] = useState<ColorfulTheme>(
    DEFAULT_COLORFUL_THEME
  );
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isColorfulTheme(currentTheme)) {
      setLastColorfulTheme(currentTheme);
    }
  }, [currentTheme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const label = useMemo(() => {
    if (currentTheme === APP_THEMES.dark) return 'Dark';
    if (currentTheme === APP_THEMES.light) return 'Light';
    return 'Colorful';
  }, [currentTheme]);

  const triggerColor = themes[currentTheme].colors.primary;

  const handleModeChange = (mode: 'dark' | 'light' | 'colorful') => {
    if (mode === 'dark') {
      setTheme(APP_THEMES.dark);
      return;
    }

    if (mode === 'light') {
      setTheme(APP_THEMES.light);
      return;
    }

    setTheme(lastColorfulTheme);
  };

  return (
    <ThemeSwitcherContainer ref={wrapperRef}>
      <ThemeTriggerButton
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ThemeTriggerLabel>{label} Theme</ThemeTriggerLabel>
        <ThemeTriggerDot $color={triggerColor} />
      </ThemeTriggerButton>

      {isOpen && (
        <ThemePopover>
          <ModeButtons>
            <ModeButton
              type="button"
              $isActive={currentTheme === APP_THEMES.dark}
              onClick={() => handleModeChange('dark')}
            >
              Dark
            </ModeButton>
            <ModeButton
              type="button"
              $isActive={currentTheme === APP_THEMES.light}
              onClick={() => handleModeChange('light')}
            >
              Light
            </ModeButton>
            <ModeButton
              type="button"
              $isActive={isColorfulTheme(currentTheme)}
              onClick={() => handleModeChange('colorful')}
            >
              Color
            </ModeButton>
          </ModeButtons>

          {isColorfulTheme(currentTheme) && (
            <>
              <PaletteTitle>Color palette</PaletteTitle>
              <PaletteGrid>
                {COLORFUL_THEMES.map((themeName) => (
                  <PaletteButton
                    key={themeName}
                    type="button"
                    $isActive={currentTheme === themeName}
                    $swatch={themes[themeName].colors.primary}
                    onClick={() => setTheme(themeName)}
                    aria-label={`Choose ${themeName} theme`}
                    title={themeName}
                  />
                ))}
              </PaletteGrid>
            </>
          )}
        </ThemePopover>
      )}
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
