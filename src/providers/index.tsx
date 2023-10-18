import { OnlyChildrenProps } from "~/types/children";
import { ThemeProvider } from "./themeProvider";

export default function MainProvider({ children }: OnlyChildrenProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
