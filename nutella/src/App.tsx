import { Global, ThemeProvider } from "@emotion/react";
import ModalController from "./components/ModalController";
import ModalProvider from "./components/Providers/ModalProvider";
import RootRouter from "./route";
import { reset } from "./style/globalStyle";
import theme from "./utils/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Global styles={reset} />
        <RootRouter />
        <ModalController />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
