import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";

export function GlobalContext({ children }: any) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
