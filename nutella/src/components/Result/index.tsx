import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import ContentExample from "./Content/ContentExample";
import Cover from "./Content/Cover";
import * as S from "./styles";
import SubmitResult from "./Content/SubmitResult";
import CommentContainer from "../CommentContainer";
import { useParams } from "react-router-dom";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useResult,
  useResultMutation,
  useSubmitResultMutation,
} from "../../queries/Result";
import { ParsedFullResultReport } from "../../utils/api/Result";
import toast from "react-hot-toast";
import MarkdownEditor from "../MarkdownEditor";
import { Row } from "../../context/MarkdownCotext";
import uniqueId from "../../constant/UniqueId";
import { useConfirmReport } from "../../queries/Project";
import RedButton from "../Buttons/RedButton";

const Result = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const projectUuid = useMemo(() => uuid || "", [uuid]);
  const autoSaveTimer = useRef<NodeJS.Timeout | null>(null);
  const canSave = useRef<boolean>(false);
  const [result, setResult] = useState<ParsedFullResultReport | undefined>(
    undefined
  );
  const { isLoading, isError, isFetched } = useResult(projectUuid, setResult);
  const resultMutation = useResultMutation(projectUuid);
  const submitMutation = useSubmitResultMutation(projectUuid);
  const confirmMutation = useConfirmReport(projectUuid, "report");

  const save = useCallback(() => {
    if (!canSave.current || !result || !isFetched) {
      return;
    }

    resultMutation.mutate(result, {
      onSuccess: () => {
        toast.success("저장 성공");
        autoSaveTimer.current = null;
        canSave.current = false;
      },
      onError: () => {
        toast.error("저장 실패");
        autoSaveTimer.current = null;
        canSave.current = false;
      },
    });
  }, [isFetched, result, resultMutation]);

  const autoSave = useCallback(() => {
    if (!canSave.current || !result || !isFetched) {
      return;
    }

    if (autoSaveTimer.current) {
      clearTimeout(autoSaveTimer.current);
      autoSaveTimer.current = null;
    }

    autoSaveTimer.current = setTimeout(save, 3000);
  }, [isFetched, result, save]);

  useEffect(() => {
    if (result?.requestorType === "USER_EDITABLE") {
      autoSave();
    }
  }, [autoSave, result]);

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
    <S.Container>
      <Cover onSubjectChange={onSubjectChange} data={result} />
      <ContentExample />
      {result?.content.map((value) => (
        <S.ContentContainer key={`page_${value.id}`}>
          <S.Delete className="delete" onClick={onDeletePage(value.id)}>
            삭제
          </S.Delete>
          <MarkdownEditor
            disabled={result?.requestorType !== "USER_EDITABLE"}
            rows={value.value}
            setRows={setRows(value.id)}
          />
        </S.ContentContainer>
      ))}
      <S.AddButton onClick={onAddPageClick}>+</S.AddButton>
      <div>
        <SubmitResult />
        <S.Buttons>
          <BorderButton>PDF로 저장</BorderButton>
          {result?.requestorType === "USER_EDITABLE" && (
            <BlueButton
              disabled={submitMutation.isLoading}
              onClick={confirmOnClick("제출하시겠습니까?", () =>
                submitMutation.mutate()
              )}
            >
              제출
            </BlueButton>
          )}
          {result?.requestorType === "ADMIN" && (
            <Fragment>
              <RedButton
                disabled={confirmMutation.isLoading}
                onClick={confirmOnClick("거절하시겠습니까?", () =>
                  confirmMutation.mutate("return")
                )}
              >
                거절
              </RedButton>
              <BlueButton
                disabled={confirmMutation.isLoading}
                onClick={confirmOnClick("승인하시겠습니까?", () =>
                  confirmMutation.mutate("approval")
                )}
              >
                승인
              </BlueButton>
            </Fragment>
          )}
        </S.Buttons>
      </div>
      <S.Line />
      <CommentContainer source="plan" uuid={projectUuid} styleType="report" />
    </S.Container>
  );
};

export default Result;
