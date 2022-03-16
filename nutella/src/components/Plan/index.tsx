import { Fragment, useCallback, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "../../context/MarkdownCotext";
import useModalRef from "../../hooks/useModalRef";
import { usePlan } from "../../queries/Plan";
import { Includes, ParsedPlanType } from "../../utils/api/Plan";
import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import CheckBox, { CheckBoxMouseEvent } from "../CheckBox";
import CommentContainer from "../CommentContainer";
import MarkdownEditor, { MarkdownEditorRef } from "../MarkdownEditor";
import ModalPortal from "../ModalPortal";
import DatePicker, { DateState } from "../Modals/DatePicker";
import * as S from "./styles";

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

  const onFetching = useCallback(() => {
    if (!goalRef.current || !contentRef.current) {
      return;
    }

    goalRef.current.matchRows();
    contentRef.current.matchRows();
  }, []);

  const [plan, setPlan] = useState<ParsedPlanType | undefined>(undefined);
  const { isLoading, isError } = usePlan(uuid!, setPlan, onFetching);

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

      plan && setPlan({ ...plan, startDate: start, endDate: end });
    },
    [plan]
  );

  const goalRows = useMemo(() => plan?.goal || [], [plan?.goal]);
  const contentRows = useMemo(() => plan?.content || [], [plan?.content]);

  const setRows = useCallback(
    (name: "goal" | "content") => (rows: Row[]) => {
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

    setPlan({ ...plan, includes });
  }, [plan]);

  if (isError && isLoading) {
    return <></>;
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
                <S.Time
                  placeholder="시간을 선택해주세요..."
                  onClick={(e) => {
                    e.stopPropagation();
                    modalRef.current?.show();
                  }}
                >
                  {dates &&
                    `${dateToString(dates.start)} ~ ${dateToString(dates.end)}`}
                </S.Time>
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
                  <S.Members>
                    {plan?.members.map((value, index) => {
                      const { studentNo, name, role } = value;
                      return (
                        <S.MemberContainer
                          key={`${studentNo}_${name}_${index}`}
                        >
                          <S.MemberName>
                            {studentNo} {name}
                          </S.MemberName>
                          <S.MemberRoleContainer>
                            {role.split(",").map((value, index) => {
                              return (
                                <S.Role key={`${value}_${index}`}>
                                  {value}
                                </S.Role>
                              );
                            })}
                          </S.MemberRoleContainer>
                        </S.MemberContainer>
                      );
                    })}
                  </S.Members>
                </S.RowContainer>
              )}
              <S.RowContainer>
                <S.RowTitle>프로젝트 목표</S.RowTitle>
                <S.RowMutiLineContent>
                  <MarkdownEditor
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
                    >
                      결과 보고서
                    </CheckBox>
                    <CheckBox
                      isActive={plan?.includes.code || false}
                      name="code"
                      onClick={onIncludesClick}
                    >
                      프로그램 코드
                    </CheckBox>
                    <CheckBox
                      isActive={plan?.includes.outcome || false}
                      name="outcome"
                      onClick={onIncludesClick}
                    >
                      실행물 (영상 또는 사진)
                    </CheckBox>
                    <CheckBox
                      isActive={
                        plan?.includes.others !== undefined ? true : false
                      }
                      name="others"
                      onClick={onOtherClick}
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
            <BorderButton>PDF로 저장</BorderButton>
            <BlueButton>제출</BlueButton>
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
