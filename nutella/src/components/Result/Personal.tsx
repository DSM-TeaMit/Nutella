import MarkdownEditor from "../MarkdownEditor";
import ContentExample from "./ContentExample";
import Cover from "./Cover";
import * as S from "./styles";

const Personal = () => {
  return (
    <S.Container>
      <Cover name="개인" />
      <ContentExample />
    </S.Container>
  );
};

export default Personal;
