import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import AddPage from "./Content/AddPage";
import ContentExample from "./Content/ContentExample";
import Cover from "./Content/Cover";
import * as S from "./styles";
import SubmitResult from "./SubmitResult";

const Personal = () => {
  return (
    <S.Container>
      <Cover name="개인" />
      <ContentExample />
      <AddPage />
      <div>
        <SubmitResult />
        <S.Buttons>
          <BorderButton>PDF로 저장</BorderButton>
          <BlueButton>제출</BlueButton>
        </S.Buttons>
      </div>
      <S.Line />
      <S.CommentContainer>
        <div>
          <S.CommentTitle>댓글&nbsp;</S.CommentTitle>
          <S.CommentTitleBlue>2개</S.CommentTitleBlue>
        </div>
        <CommentInput type="report" />
        <Comment type="report" />
        <Comment type="report" />
      </S.CommentContainer>
    </S.Container>
  );
};

export default Personal;
