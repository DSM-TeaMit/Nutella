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
        >{`1. First item\n2. Second item\n3. Third item\n\t1. Indented item\n\t2. Indented item\n\t\t1. wow\n4. Fourth item`}</ReactMarkdown>
      </S.Container>
    </>
  );
};

export default MarkdownRender;
