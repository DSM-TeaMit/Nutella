import ReactMarkdown from "react-markdown";
import * as S from "./styles";

const MarkdownRender = () => {
  const value = `test
  
  - 1
  - 2
  - 3
    - 3-1
    - 3-2
        - 3-2-1
        - 3-2-2
            - 3-2-2-1
            - 3-2-2-2
            - 3-2-2-2-1
  - 4`;

  return (
    <>
      <S.Container>
        <ReactMarkdown
          components={{
            blockquote: ({ children }) => {
              return <S.BlockquoteInner>{children}</S.BlockquoteInner>;
            },
          }}
        >
          {value}
        </ReactMarkdown>
      </S.Container>
    </>
  );
};

export default MarkdownRender;
