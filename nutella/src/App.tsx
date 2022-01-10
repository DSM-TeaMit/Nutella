import { ThemeProvider } from "@emotion/react";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>hello world!</div>
    </ThemeProvider>
  );
}

export default App;
