import { Global, ThemeProvider } from "@emotion/react";
import RootRouter from "./route";
import { reset } from "./style/globalStyle";
import theme from "./utils/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
