import { Global, Theme, ThemeContext } from "@emotion/react";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import * as S from "./styles";

const MarkdownRender = () => {
  const themeContext = useContext(ThemeContext) as Theme;

  return (
    <>
      <Global styles={S.MarkdownStyle(themeContext)} />
      <ReactMarkdown>{`# h1,\n**world**`}</ReactMarkdown>
    </>
  );
};

export default MarkdownRender;
