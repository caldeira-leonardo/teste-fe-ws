import { QueryClient, QueryClientProvider } from "react-query";
import { ProviderProps } from "./types";

const queryClient = new QueryClient();

function QueryProvider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export { QueryProvider };
