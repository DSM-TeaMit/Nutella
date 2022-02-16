import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import AddPage from "./AddPage";
import ContentExample from "./ContentExample";
import Cover from "./Cover";
import * as S from "./styles";
import SubmitResult from "./SubmitResult";

const Team = () => {
  return (
    <S.Container>
      <Cover name="팀 / 동아리" />
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

export default Team;
