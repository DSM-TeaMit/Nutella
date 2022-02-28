import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import AddPage from "./Content/AddPage";
import ContentExample from "./Content/ContentExample";
import Cover from "./Content/Cover";
import * as S from "./styles";
import SubmitResult from "./Content/SubmitResult";
import CommentContainer from "../CommentContainer";
import { useParams } from "react-router-dom";

const Team = () => {
  const { uuid } = useParams<{ uuid: string }>();

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
      <CommentContainer source="plan" uuid={uuid || ""} styleType="report" />
    </S.Container>
  );
};

export default Team;
