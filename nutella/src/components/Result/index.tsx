import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import AddPage from "./Content/AddPage";
import ContentExample from "./Content/ContentExample";
import Cover from "./Content/Cover";
import * as S from "./styles";
import SubmitResult from "./Content/SubmitResult";
import CommentContainer from "../CommentContainer";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useResult } from "../../queries/Result";
import { ParsedFullResultReport } from "../../utils/api/Result";

const Result = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const projectUuid = useMemo(() => uuid || "", [uuid]);
  const [result, setResult] = useState<ParsedFullResultReport | undefined>(
    undefined
  );
  const { isLoading, isError } = useResult(projectUuid, setResult);

  if (isLoading || isError) {
    return <></>;
  }

  return (
    <S.Container>
      <Cover data={result} />
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
