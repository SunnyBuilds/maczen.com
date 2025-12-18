/**
 * Theme Configuration Utilities
 * Reads theme.json and generates CSS variables for dynamic theming.
 */

import themeConfig from '@/config/theme.json';

export interface ThemeColors {
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  accent: string;
  'accent-foreground': string;
  background: string;
  foreground: string;
  muted: string;
  'muted-foreground': string;
  border: string;
  ring: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
  destructive: string;
  'destructive-foreground': string;
}

export interface ThemeFonts {
  heading: string;
  body: string;
  mono: string;
}

export interface ThemeConfig {
  name: string;
  niche: string;
  colors: ThemeColors;
  colors_dark: ThemeColors;
  fonts: ThemeFonts;
  reasoning?: string;
  generated_at?: string;
  generated_by?: string;
}

export function getTheme(): ThemeConfig {
  return themeConfig as ThemeConfig;
}

export function generateLightModeCSS(): string {
  const { colors } = getTheme();
  return generateCSSVariables(colors);
}

export function generateDarkModeCSS(): string {
  const { colors_dark } = getTheme();
  return generateCSSVariables(colors_dark);
}

function generateCSSVariables(colors: ThemeColors): string {
  const variables = Object.entries(colors)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n    ');
  return variables;
}

export function generateGoogleFontsURL(): string {
  const { fonts } = getTheme();
  const fontFamilies: string[] = [];

  if (fonts.heading && fonts.heading !== 'Geist') {
    const headingFont = fonts.heading.replace(/ /g, '+');
    fontFamilies.push(`family=${headingFont}:wght@400;500;600;700`);
  }

  if (fonts.body && fonts.body !== 'Geist' && fonts.body !== fonts.heading) {
    const bodyFont = fonts.body.replace(/ /g, '+');
    fontFamilies.push(`family=${bodyFont}:wght@400;500;600`);
  }

  if (fontFamilies.length === 0) {
    return '';
  }

  return `https://fonts.googleapis.com/css2?${fontFamilies.join('&')}&display=swap`;
}

export function generateThemeStyles(): string {
  const theme = getTheme();
  const lightCSS = generateLightModeCSS();
  const darkCSS = generateDarkModeCSS();

  return `
    :root {
      ${lightCSS}
      --font-heading: "${theme.fonts.heading}", "Georgia", serif;
      --font-body: "${theme.fonts.body}", "Geist", sans-serif;
      --font-mono: "${theme.fonts.mono}", "Geist Mono", monospace;
    }

    .dark {
      ${darkCSS}
    }
  `;
}
