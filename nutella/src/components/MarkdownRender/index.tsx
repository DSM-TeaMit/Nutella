import ReactMarkdown from "react-markdown";
import * as S from "./styles";

interface PropsType {
  children: string;
}

const MarkdownRender = ({ children }: PropsType) => {
  return (
    <>
      <S.Container>
        <ReactMarkdown>{children}</ReactMarkdown>
      </S.Container>
    </>
  );
};

export default MarkdownRender;
