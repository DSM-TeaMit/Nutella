import { Fragment, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "../../context/MarkdownCotext";
import useModalRef from "../../hooks/useModalRef";
import { usePlan } from "../../queries/Plan";
import { ParsedPlanType } from "../../utils/api/Plan";
import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import CheckBox from "../CheckBox";
import CommentContainer from "../CommentContainer";
import MarkdownEditor, { getInitRows } from "../MarkdownEditor";
import ModalPortal from "../ModalPortal";
import DatePicker, { DateState } from "../Modals/DatePicker";
import * as S from "./styles";

const dateToString = (date: Date): string =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

const Plan = () => {
  const [dates, setDates] = useState<DateState | null>(null);
  const [goalRows, setGoalRows] = useState<Row[]>([...getInitRows()]);
  const [contentRows, setContentRows] = useState<Row[]>([...getInitRows()]);
  const modalRef = useModalRef();
  const { uuid } = useParams<{ uuid: string }>();
  const [plan, setPlan] = useState<ParsedPlanType | undefined>(undefined);
  const { isLoading, isError } = usePlan(uuid!, setPlan);

  if (isError && isLoading) {
    return <></>;
  }

  const dates = useMemo<DateState>(
    () => ({ start: plan?.startDate, end: plan?.endDate }),
    [plan?.endDate, plan?.startDate]
  );

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
                  <MarkdownEditor rowState={[goalRows, setGoalRows]} />
                </S.RowMutiLineContent>
              </S.RowContainer>
              <S.RowContainer>
                <S.RowTitle>프로젝트 내용</S.RowTitle>
                <S.RowMutiLineContent>
                  <MarkdownEditor rowState={[contentRows, setContentRows]} />
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
                    <CheckBox isActive={false}>hello world</CheckBox>
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
        <DatePicker datesState={[dates, setDates]} />
      </ModalPortal>
    </Fragment>
  );
};

export default Plan;
