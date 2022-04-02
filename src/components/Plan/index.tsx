import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { Row } from "../../context/MarkdownCotext";
import useModalRef from "../../hooks/useModalRef";
import {
  usePlan,
  usePlanMutation,
  useSubmitPlanMutation,
} from "../../queries/Plan";
import { Includes, ParsedPlanType } from "../../utils/api/Plan";
import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import CheckBox, { CheckBoxMouseEvent } from "../CheckBox";
import CommentContainer from "../CommentContainer";
import MarkdownEditor, { MarkdownEditorRef } from "../MarkdownEditor";
import ModalPortal from "../ModalPortal";
import DatePicker, { DateState } from "../Modals/DatePicker";
import * as S from "./styles";
import toast from "react-hot-toast";
import RedButton from "../Buttons/RedButton";
import { useConfirmReport } from "../../queries/Project";
import useTitle from "../../hooks/useTitle";
import reportStatusMessage from "../../constant/ReportStatusMessage";
import ReportStatus from "../../interface/ReportStatus";

const dateToString = (date?: Date): string => {
  if (!date) {
    return "";
  }

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

const Plan = () => {
  const modalRef = useModalRef();
  const goalRef = useRef<MarkdownEditorRef>(null);
  const contentRef = useRef<MarkdownEditorRef>(null);
  const { uuid } = useParams<{ uuid: string }>();
  const autoSaveTimer = useRef<NodeJS.Timeout | null>(null);
  const canSave = useRef<boolean>(false);
  const confirmMutation = useConfirmReport(uuid || "", "plan");
  const submitMutation = useSubmitPlanMutation(uuid || "");

  const onFetching = useCallback(() => {
    if (!goalRef.current || !contentRef.current) {
      return;
    }

    goalRef.current.matchRows();
    contentRef.current.matchRows();
  }, []);

  const [plan, setPlan] = useState<ParsedPlanType | undefined>(undefined);
  const planMutation = usePlanMutation(uuid!);
  const { isLoading, isError, isFetched } = usePlan(uuid!, setPlan, onFetching);

  useTitle(isError ? "오류 발생" : `${plan?.projectName || ""} 계획서`);

  const save = useCallback(() => {
    if (!canSave.current || !plan || !isFetched) {
      return;
    }

    planMutation.mutate(plan, {
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
  }, [isFetched, plan, planMutation]);

  const autoSave = useCallback(() => {
    if (!canSave.current || !plan || !isFetched) {
      return;
    }

    if (autoSaveTimer.current) {
      clearTimeout(autoSaveTimer.current);
      autoSaveTimer.current = null;
    }

    autoSaveTimer.current = setTimeout(save, 3000);
  }, [isFetched, plan, save]);

  const dates = useMemo<DateState>(
    () => ({ start: plan?.startDate, end: plan?.endDate }),
    [plan]
  );

  const setDates = useCallback(
    (dates: DateState) => {
      const { start, end } = dates;

      if (!start || !end) {
        return;
      }

      canSave.current = true;
      plan && setPlan({ ...plan, startDate: start, endDate: end });
    },
    [plan]
  );

  const goalRows = useMemo(() => plan?.goal || [], [plan?.goal]);
  const contentRows = useMemo(() => plan?.content || [], [plan?.content]);

  const setRows = useCallback(
    (name: "goal" | "content") => (rows: Row[]) => {
      canSave.current = true;
      plan && setPlan({ ...plan, [name]: rows });
    },
    [plan]
  );

  const onIncludesClick = useCallback(
    (e: CheckBoxMouseEvent) => {
      const name = e.name as keyof Includes;
      if (!plan || !name) {
        return;
      }

      const includes = { ...plan.includes, [name]: !plan.includes[name] };

      canSave.current = true;
      setPlan({ ...plan, includes });
    },
    [plan]
  );

  const onOtherClick = useCallback(() => {
    if (!plan) {
      return;
    }

    const value = plan.includes.others !== undefined ? undefined : "";

    const includes = { ...plan.includes, others: value };

    canSave.current = true;
    setPlan({ ...plan, includes });
  }, [plan]);

  const cantEdit = useMemo(
    () =>
      plan?.requestorType !== "USER_EDITABLE" ||
      (["ACCEPTED", "PENDING"] as ReportStatus[]).includes(plan.status),
    [plan]
  );

  useEffect(() => {
    if (!cantEdit) {
      autoSave();
    }
  }, [autoSave, cantEdit, plan]);

  const memberList = useMemo(
    () =>
      plan?.members.map((value, index) => {
        const { studentNo, name, role } = value;
        return (
          <S.MemberContainer key={`${studentNo}_${name}_${index}`}>
            <S.MemberName>
              {studentNo} {name}
            </S.MemberName>
            <S.MemberRoleContainer>
              {role.split(",").map((value, index) => {
                return <S.Role key={`${value}_${index}`}>{value}</S.Role>;
              })}
            </S.MemberRoleContainer>
          </S.MemberContainer>
        );
      }),
    [plan]
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
    <Fragment>
      <S.Container>
        <div>
          <S.ContentContainer>
            <S.ContentInner>
              <S.Title>
                {plan?.projectType === "PERS" ? "개인" : "팀 / 동아리"} 프로젝트
                계획서
              </S.Title>
              <S.RowContainer>
                <S.RowTitle>프로젝트 명</S.RowTitle>
                <S.RowLineContent>{plan?.projectName}</S.RowLineContent>
              </S.RowContainer>
              <S.RowContainer>
                <S.RowTitle>진행 기간</S.RowTitle>
                {cantEdit ? (
                  <S.RowLineContent>
                    {dates &&
                      `${dateToString(dates.start)} ~ ${dateToString(
                        dates.end
                      )}`}
                  </S.RowLineContent>
                ) : (
                  <S.Time
                    placeholder="시간을 선택해주세요..."
                    onClick={(e) => {
                      e.stopPropagation();
                      modalRef.current?.show();
                    }}
                  >
                    {dates &&
                      `${dateToString(dates.start)} ~ ${dateToString(
                        dates.end
                      )}`}
                  </S.Time>
                )}
              </S.RowContainer>
              <S.RowContainer>
                <S.RowTitle>신청자</S.RowTitle>
                <S.RowLineContent>
                  {plan?.writer.studentNo} {plan?.writer.name}
                </S.RowLineContent>
              </S.RowContainer>
              {plan?.projectType !== "PERS" && (
                <S.RowContainer>
                  <S.RowTitle>프로젝트 및 팀원 역할</S.RowTitle>
                  <S.Members>{memberList}</S.Members>
                </S.RowContainer>
              )}
              <S.RowContainer>
                <S.RowTitle>프로젝트 목표</S.RowTitle>
                <S.RowMutiLineContent>
                  <MarkdownEditor
                    disabled={cantEdit}
                    rows={goalRows}
                    setRows={setRows("goal")}
                    ref={goalRef}
                  />
                </S.RowMutiLineContent>
              </S.RowContainer>
              <S.RowContainer>
                <S.RowTitle>프로젝트 내용</S.RowTitle>
                <S.RowMutiLineContent>
                  <MarkdownEditor
                    disabled={cantEdit}
                    ref={contentRef}
                    rows={contentRows}
                    setRows={setRows("content")}
                  />
                </S.RowMutiLineContent>
              </S.RowContainer>
              <S.RowContainer>
                <S.RowTitle>
                  결과물
                  <br />
                  (해당사항 체크)
                </S.RowTitle>
                <S.RowLineContent>
                  <S.CheckBoxContianer>
                    <CheckBox
                      isActive={plan?.includes.report || false}
                      name="report"
                      onClick={onIncludesClick}
                      disabled={cantEdit}
                    >
                      결과 보고서
                    </CheckBox>
                    <CheckBox
                      isActive={plan?.includes.code || false}
                      name="code"
                      onClick={onIncludesClick}
                      disabled={cantEdit}
                    >
                      프로그램 코드
                    </CheckBox>
                    <CheckBox
                      isActive={plan?.includes.outcome || false}
                      name="outcome"
                      onClick={onIncludesClick}
                      disabled={cantEdit}
                    >
                      실행물 (영상 또는 사진)
                    </CheckBox>
                    <CheckBox
                      isActive={
                        plan?.includes.others !== undefined ? true : false
                      }
                      name="others"
                      onClick={onOtherClick}
                      disabled={cantEdit}
                    >
                      기타
                    </CheckBox>
                  </S.CheckBoxContianer>
                </S.RowLineContent>
              </S.RowContainer>
              <S.RowContainer>
                <S.RowTitle>담당교사 확인</S.RowTitle>
                <S.RowLineContent>
                  <S.DayContianer>
                    <span>년</span>
                    <span>월</span>
                    <span>일</span>
                  </S.DayContianer>
                  <S.InfoContainer>
                    <span>직위:</span>
                    <span>이름:</span>
                    <span>(인)</span>
                  </S.InfoContainer>
                </S.RowLineContent>
              </S.RowContainer>
            </S.ContentInner>
          </S.ContentContainer>
          <S.Buttons>
            {plan && (
              <S.Status status={plan.status}>
                {reportStatusMessage.get(plan.status)}
              </S.Status>
            )}
            <BorderButton>PDF로 저장</BorderButton>
            {plan?.requestorType === "USER_EDITABLE" && (
              <BlueButton
                disabled={
                  submitMutation.isLoading ||
                  (["ACCEPTED", "PENDING"] as ReportStatus[]).includes(
                    plan.status
                  )
                }
                onClick={confirmOnClick("제출하시겠습니까?", () =>
                  submitMutation.mutate()
                )}
              >
                제출
              </BlueButton>
            )}
            {plan?.requestorType === "ADMIN" && plan.status === "PENDING" && (
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
        <CommentContainer source="plan" uuid={uuid || ""} styleType="report" />
      </S.Container>
      <ModalPortal ref={modalRef}>
        <DatePicker dates={dates} setDates={setDates} />
      </ModalPortal>
    </Fragment>
  );
};

export default Plan;
