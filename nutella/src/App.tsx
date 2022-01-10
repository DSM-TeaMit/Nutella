import { Global, ThemeProvider } from "@emotion/react";
import { reset } from "./style/globalStyle";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
    </ThemeProvider>
  );
}

export default App;
