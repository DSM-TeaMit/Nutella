import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useRef } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import queryKeys from "../../../../constant/QueryKeys";
import { RequestorType } from "../../../../interface";
import { useFileExists, useFileMutation } from "../../../../queries/Result";
import * as S from "./styles";

interface PropsType {
  projectUuid: string;
  projectName: string;
  requestorType: RequestorType;
}

const SubmitResult: FC<PropsType> = ({ projectUuid, projectName, requestorType }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { upload, download } = useFileMutation(projectUuid);
  const { data, error, isError, isSuccess, isLoading } = useFileExists(projectUuid);
  const queryClient = useQueryClient();

  const isExists = useMemo(() => {
    if (isError && axios.isAxiosError(error) && error.response?.status === 404) {
      return "NONE";
    }

    if (isSuccess && data.status === 200) {
      return "EXIST";
    }

    return "ERROR";
  }, [data, error, isError, isSuccess]);

  const onFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || !inputFileRef.current) {
        return;
      }

      const file = e.target.files[0];

      if (file === undefined) {
        return;
      }

      await upload.mutateAsync(file);
      inputFileRef.current.files = null;
      queryClient.invalidateQueries([queryKeys.file, projectUuid]);
    },
    [projectUuid, queryClient, upload]
  );
  const link = useMemo(() => document.createElement("a"), []);

  const onDownload = useCallback(() => {
    download.mutateAsync().then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));

      link.href = url;
      link.download = `${projectName} 결과물.zip`;

      link.click();

      window.URL.revokeObjectURL(url);
    });
  }, [download, link, projectName]);

  useEffect(() => {
    if (!isLoading && isExists === "ERROR") {
      toast.error("결과물을 가져오기 실패했습니다.");
    }
  }, [isExists, isLoading]);

  return (
    <>
      <S.ResultInner>
        <S.ResultTitle>결과물 제출</S.ResultTitle>
        <div>
          {requestorType === "USER_EDITABLE" && !isLoading && (
            <span>
              <S.AddFile onClick={() => inputFileRef.current?.click()}>
                결과물 {isExists === "NONE" ? "업로드 +" : "수정"}
              </S.AddFile>
            </span>
          )}
          {isExists === "EXIST" ? (
            <span>
              <S.AddFile onClick={onDownload}>결과물 다운로드</S.AddFile>
            </span>
          ) : (
            <S.Message>아직 결과물을 업로드 하지 않았습니다.</S.Message>
          )}
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
