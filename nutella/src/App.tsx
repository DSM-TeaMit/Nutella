import { Global, ThemeProvider } from "@emotion/react";
import MessageController from "./components/MessageController";
import MessageProvider from "./components/Providers/MessageProvider";
import ModalProvider from "./components/Providers/ModalProvider";
import UserProvider from "./components/Providers/UserProvider";
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
        <UserProvider>
          <ModalProvider>
            <MessageProvider>
              <Global styles={reset} />
              <RootRouter />
              <MessageController />
              <Toaster position="bottom-right" />
            </MessageProvider>
          </ModalProvider>
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
