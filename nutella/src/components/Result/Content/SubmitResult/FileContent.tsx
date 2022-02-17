import { FC } from "react";
import * as S from "./styles";

const FileContent: FC = () => {
  return (
    <S.FileRow>
      <div>
        <S.FileTitle>프로젝트_결과_사진.zip</S.FileTitle>
        <S.FileSize>1.3MB</S.FileSize>
      </div>
      <S.RemoveFile>삭제</S.RemoveFile>
    </S.FileRow>
  );
};

export default FileContent;
