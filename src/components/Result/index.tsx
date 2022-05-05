import { BlueButton, BorderButton, RedButton } from "../Buttons";
import ContentExample from "./Content/ContentExample";
import Cover from "./Content/Cover";
import * as S from "./styles";
import SubmitResult from "./Content/SubmitResult";
import CommentContainer from "../CommentContainer";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useResult, useResultMutation, useSubmitResultMutation } from "../../queries/Result";
import { ParsedFullResultReport } from "../../utils/api/Result";
import MarkdownEditor from "../MarkdownEditor";
import { Row } from "../../context/MarkdownContext";
import uniqueId from "../../constant/UniqueId";
import { useConfirmReport } from "../../queries/Project";
import useTitle from "../../hooks/useTitle";
import reportStatusMessage from "../../constant/ReportStatusMessage";
import { ReportStatus } from "../../interface";
import { useReactToPrint } from "react-to-print";
import axios from "axios";

const Result = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const projectUuid = useMemo(() => uuid || "", [uuid]);
  const autoSaveTimer = useRef<NodeJS.Timeout | null>(null);
  const canSave = useRef<boolean>(false);
  const [result, setResult] = useState<ParsedFullResultReport | undefined>(undefined);
  const { isLoading, isError, isFetched, error, isFetching } = useResult(projectUuid, setResult);
  const resultMutation = useResultMutation(projectUuid);
  const submitMutation = useSubmitResultMutation(projectUuid);
  const confirmMutation = useConfirmReport(projectUuid, "report");
  const [key, setKey] = useState<string>(uniqueId());
  const fetching = useMemo(
    () => isFetching || resultMutation.isLoading || confirmMutation.isLoading || submitMutation.isLoading,
    [confirmMutation.isLoading, isFetching, resultMutation.isLoading, submitMutation.isLoading]
  );

  const resultReportRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => resultReportRef.current,
    documentTitle: `${result?.projectName} 결과 보고서`,
  });

  useTitle(isError ? "오류 발생" : `${result?.projectName || ""} 결과 보고서`);

  const save = useCallback(() => {
    if (!canSave.current || !result || !isFetched) {
      return;
    }

    resultMutation.mutate(result, {
      onSuccess: () => {
        autoSaveTimer.current = null;
        canSave.current = false;
      },
      onError: () => {
        autoSaveTimer.current = null;
        canSave.current = false;
      },
    });
  }, [isFetched, result, resultMutation]);

  const autoSave = useCallback(() => {
    if (!canSave.current || !result || !isFetched || resultMutation.isLoading) {
      return;
    }

    if (autoSaveTimer.current) {
      clearTimeout(autoSaveTimer.current);
      autoSaveTimer.current = null;
    }

    autoSaveTimer.current = setTimeout(save, 3000);
  }, [isFetched, result, resultMutation.isLoading, save]);

  const cantEdit = useMemo(
    () =>
      result?.requestorType !== "USER_EDITABLE" || (["ACCEPTED", "PENDING"] as ReportStatus[]).includes(result.status),
    [result]
  );

  useEffect(() => {
    if (!cantEdit) {
      autoSave();
    }
  }, [autoSave, cantEdit, result]);

  useEffect(() => {
    setKey(uniqueId());
  }, [result]);

  const setRows = useCallback(
    (id: string) => (rows: Row[]) => {
      if (!result) {
        return;
      }
      canSave.current = true;

      const page = result?.content.map((value, index) => {
        if (value.id === id) {
          return { id: id, value: rows };
        } else {
          return value;
        }
      });

      setResult({ ...result, content: page });
    },
    [result]
  );

  const onAddPageClick = useCallback(() => {
    if (!result) {
      return;
    }
    canSave.current = true;

    setResult({
      ...result,
      content: [
        ...result.content,
        {
          id: uniqueId(),
          value: [{ id: uniqueId(), tab: 0, type: "p", text: "" }],
        },
      ],
    });
  }, [result]);

  const onSubjectChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!result) {
        return;
      }
      canSave.current = true;
      setResult({ ...result, subject: e.target.value });
    },
    [result]
  );

  const onDeletePage = useCallback(
    (id: string) => () => {
      if (!result) {
        return;
      }

      if (window.confirm("페이지를 삭제하시겠습니까?")) {
        canSave.current = true;
        setResult({
          ...result,
          content: result.content.filter((value) => value.id !== id),
        });
      }
    },
    [result]
  );

  const confirmOnClick = useCallback(
    (message: string, callback: () => void) => () => {
      if (window.confirm(message)) {
        callback();
      }
    },
    []
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isError && axios.isAxiosError(error) && error.response?.status === 404) {
      navigate("/404");
    }
  }, [error, isError, navigate]);

  if (isLoading) {
    return (
      <S.Margin>
        <S.Message>로딩중...</S.Message>
      </S.Margin>
    );
  }

  if (isError) {
    return (
      <S.Margin>
        <S.Message>:(</S.Message>
        <S.Message>
          <p>오류 발생</p>
          <p>다시 시도해주세요.</p>
        </S.Message>
      </S.Margin>
    );
  }

  return (
    <Fragment>
      <S.Container>
        <Cover onSubjectChange={onSubjectChange} data={result} />
        {!cantEdit && <ContentExample />}
        {result?.content.map((value) => (
          <S.ContentContainer key={`page_${value.id}`}>
            {cantEdit && (
              <S.Delete className="delete" onClick={onDeletePage(value.id)}>
                삭제
              </S.Delete>
            )}
            <MarkdownEditor disabled={cantEdit} rows={value.value} setRows={setRows(value.id)} />
          </S.ContentContainer>
        ))}
        {result &&
          result.requestorType === "USER_EDITABLE" &&
          (["NOT_SUBMITTED", "REJECTED"] as ReportStatus[]).includes(result.status) && (
            <S.AddButton onClick={onAddPageClick}>+</S.AddButton>
          )}
        <div>
          {result && (
            <SubmitResult
              requestorType={result.requestorType}
              projectUuid={projectUuid}
              projectName={result.projectName}
            />
          )}
          <S.Buttons>
            {result && <S.Status status={result.status}>{reportStatusMessage.get(result.status)}</S.Status>}
            <BorderButton onClick={handlePrint}>PDF로 저장</BorderButton>
            {result?.requestorType === "USER_EDITABLE" && (
              <BlueButton
                disabled={fetching || (["ACCEPTED", "PENDING"] as ReportStatus[]).includes(result.status)}
                onClick={confirmOnClick("제출하시겠습니까?", () => submitMutation.mutate())}
              >
                제출
              </BlueButton>
            )}
            {result?.requestorType === "ADMIN" && result.status === "PENDING" && (
              <Fragment>
                <RedButton
                  disabled={fetching}
                  onClick={confirmOnClick("거절하시겠습니까?", () => confirmMutation.mutate("return"))}
                >
                  거절
                </RedButton>
                <BlueButton
                  disabled={fetching}
                  onClick={confirmOnClick("승인하시겠습니까?", () => confirmMutation.mutate("approval"))}
                >
                  승인
                </BlueButton>
              </Fragment>
            )}
          </S.Buttons>
        </div>
        <S.Line />
        <CommentContainer source="report" uuid={projectUuid} styleType="report" />
      </S.Container>

      {/* PDF로 저장할 컴포넌트 */}
      <div style={{ display: "none" }} key={key}>
        <S.Container>
          <S.PDFContainer ref={resultReportRef}>
            <Cover onSubjectChange={onSubjectChange} data={result} />
            {result?.content.map((value) => (
              <S.ContentContainer key={`page_${value.id}`}>
                <S.Delete className="delete" onClick={onDeletePage(value.id)}>
                  삭제
                </S.Delete>
                <MarkdownEditor disabled={true} rows={value.value} setRows={setRows(value.id)} />
              </S.ContentContainer>
            ))}
          </S.PDFContainer>
        </S.Container>
      </div>
    </Fragment>
  );
};

export default Result;
