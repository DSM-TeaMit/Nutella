import { FC, useCallback, useRef } from "react";
import { useFileMutation } from "../../../../queries/Result";
import * as S from "./styles";

interface PropsType {
  projectUuid: string;
}

const SubmitResult: FC<PropsType> = ({ projectUuid }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { download, upload } = useFileMutation(projectUuid);

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || !inputFileRef.current) {
        return;
      }

      const file = e.target.files[0];

      if (file === undefined) {
        return;
      }

      upload.mutate(file);
      inputFileRef.current.files = null;
    },
    [upload]
  );

  const onDownload = useCallback(() => {
    download.mutate();
  }, [download]);

  return (
    <>
      <S.ResultInner>
        <S.ResultTitle>결과물 제출</S.ResultTitle>
        <div>
          <span>
            <S.AddFile onClick={() => inputFileRef.current?.click()}>결과물 업로드 +</S.AddFile>
          </span>
          <span>
            <S.AddFile onClick={onDownload}>결과물 다운로드</S.AddFile>
          </span>
        </div>
      </S.ResultInner>
      <input
        ref={inputFileRef}
        onClick={(e) => e.stopPropagation()}
        style={{ display: "none" }}
        type="file"
        onChange={onFileChange}
        accept=".zip"
      />
    </>
  );
};

export default SubmitResult;
