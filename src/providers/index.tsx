import { QueryProvider } from "./queryProvider";
import { ThemeProvider } from "./themeProvider";
import { ProviderProps } from "./types";

export default function MainProvider({ children }: ProviderProps) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
}
