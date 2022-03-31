import { Global, ThemeProvider } from "@emotion/react";
import ModalProvider from "./components/Providers/ModalProvider";
import RootRouter from "./route";
import { reset } from "./style/globalStyle";
import theme from "./utils/theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Global styles={reset} />
          <RootRouter />
          <Toaster position="top-center" />
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
