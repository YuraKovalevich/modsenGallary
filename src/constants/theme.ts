export const APP_THEMES = {
  dark: 'dark',
  light: 'light',
  colorfulViolet: 'colorfulViolet',
  colorfulOcean: 'colorfulOcean',
  colorfulSunset: 'colorfulSunset',
  colorfulForest: 'colorfulForest',
} as const;

export type AppTheme = (typeof APP_THEMES)[keyof typeof APP_THEMES];

export const COLORFUL_THEMES = [
  APP_THEMES.colorfulViolet,
  APP_THEMES.colorfulOcean,
  APP_THEMES.colorfulSunset,
  APP_THEMES.colorfulForest,
] as const;

export type ColorfulTheme = (typeof COLORFUL_THEMES)[number];

export const DEFAULT_COLORFUL_THEME: ColorfulTheme = APP_THEMES.colorfulViolet;
