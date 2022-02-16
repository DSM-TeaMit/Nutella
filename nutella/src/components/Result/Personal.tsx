import MarkdownEditor from "../MarkdownEditor";
import AddPage from "./AddPage";
import ContentExample from "./ContentExample";
import Cover from "./Cover";
import * as S from "./styles";
import SubmitResult from "./SubmitResult";

const Personal = () => {
  return (
    <S.Container>
      <Cover name="개인" />
      <ContentExample />
      <AddPage />
      <SubmitResult />
    </S.Container>
  );
};

export default Personal;
