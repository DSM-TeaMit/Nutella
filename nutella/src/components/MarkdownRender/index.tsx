import ReactMarkdown from "react-markdown";
import * as S from "./styles";

const MarkdownRender = () => {
  return (
    <>
      <S.Container>
        <ReactMarkdown
          components={{
            blockquote: ({ children }) => {
              return <S.BlockquoteInner>{children}</S.BlockquoteInner>;
            },
          }}
        >{`# h1,\n> world\n>\n>> wowow!`}</ReactMarkdown>
      </S.Container>
    </>
  );
};

export default MarkdownRender;
