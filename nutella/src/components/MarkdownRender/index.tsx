import ReactMarkdown from "react-markdown";
import * as S from "./styles";

const MarkdownRender = () => {
  return (
    <>
      <S.Container>
        <ReactMarkdown>{`# h1,\n> world`}</ReactMarkdown>
      </S.Container>
    </>
  );
};

export default MarkdownRender;
