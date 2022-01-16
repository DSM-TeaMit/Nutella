import ReactMarkdown from "react-markdown";
import * as S from "./styles";

const MarkdownRender = () => {
  const value = `test
  this is code:\n
  \`hello world!\`\n
  ---
  and this is code block:
  \`\`\`
  wow
  \`\`\`
  and
  [Duck Duck Go](https://duckduckgo.com)
  and\n
  <https://www.markdownguide.org>\n
  <fake@example.com>
  `;

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
