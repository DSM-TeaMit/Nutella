import { Global, ThemeProvider } from "@emotion/react";
import { ModalProvider } from "./context/ModalContext";
import RootRouter from "./route";
import { reset } from "./style/globalStyle";
import theme from "./utils/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Global styles={reset} />
        <RootRouter />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
