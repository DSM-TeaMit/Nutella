import { FC } from "react";
import FileContent from "./FileContent";
import * as S from "./styles";

const SubmitResult: FC = () => {
  return (
    <S.ResultInner>
      <S.ResultTitle>결과물 제출</S.ResultTitle>
      <FileContent />
      <span>
        <S.AddFile>파일 업로드 +</S.AddFile>
      </span>
    </S.ResultInner>
  );
};

export default SubmitResult;
