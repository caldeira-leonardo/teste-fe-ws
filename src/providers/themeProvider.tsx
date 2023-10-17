import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { ProviderProps } from "./types";

function ThemeProvider({ children }: ProviderProps) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export { ThemeProvider };
