import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import AddPage from "./Content/AddPage";
import ContentExample from "./Content/ContentExample";
import Cover from "./Content/Cover";
import * as S from "./styles";
import SubmitResult from "./Content/SubmitResult";
import CommentContainer from "../CommentContainer";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

const Result = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const projectUuid = useMemo(() => uuid || "", [uuid]);

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
      <CommentContainer source="plan" uuid={projectUuid} styleType="report" />
    </S.Container>
  );
};

export default Result;
