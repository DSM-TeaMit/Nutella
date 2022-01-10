import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "./style/theme";

const Test = styled.div`
  font: ${(props) => props.theme.fonts.h1};
  color: ${(props) => props.theme.colors.primary.default};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>hello world!</div>
      <Test>Hello i'm theme test</Test>
    </ThemeProvider>
  );
}

export default App;
