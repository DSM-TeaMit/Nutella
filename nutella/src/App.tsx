import { Global, ThemeProvider } from "@emotion/react";
import MessageController from "./components/MessageController";
import ModalController from "./components/ModalController";
import MessageProvider from "./components/Providers/MessageProvider";
import ModalProvider from "./components/Providers/ModalProvider";
import RootRouter from "./route";
import { reset } from "./style/globalStyle";
import theme from "./utils/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <MessageProvider>
          <Global styles={reset} />
          <RootRouter />
          <ModalController />
          <MessageController />
        </MessageProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
