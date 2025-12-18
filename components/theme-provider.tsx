/**
 * ThemeProvider Component (Server Component)
 * NOTE: No "use client" - ensures CSS variables are injected during SSR.
 */
import { generateThemeStyles, generateGoogleFontsURL, getTheme } from "@/lib/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = getTheme();
  const themeStyles = generateThemeStyles();
  const googleFontsURL = generateGoogleFontsURL();

  return (
    <>
      {googleFontsURL && <link rel="stylesheet" href={googleFontsURL} />}
      <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      <meta name="theme-name" content={theme.name} />
      {children}
    </>
  );
}
export default ThemeProvider;
