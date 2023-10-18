import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { OnlyChildrenProps } from "~/types/children";

function ThemeProvider({ children }: OnlyChildrenProps) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export { ThemeProvider };
