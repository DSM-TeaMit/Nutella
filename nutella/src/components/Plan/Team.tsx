import { useState } from "react";
import { Row } from "../../context/MarkdownCotext";
import useModalContext from "../../hooks/useModalContext";
import BlueButton from "../Buttons/BlueButton";
import BorderButton from "../Buttons/BorderButton";
import CheckBox from "../CheckBox";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MarkdownEditor, { initRows } from "../MarkdownEditor";
import DatePicker, { DateState } from "../Modals/DatePicker";
import * as S from "./styles";

const dateToString = (date: Date): string =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

const Team = () => {
  const { openModal } = useModalContext();
  const [dates, setDates] = useState<DateState | null>(null);
  const [goalRows, setGoalRows] = useState<Row[]>(initRows);
  const [contentRows, setContentRows] = useState<Row[]>(initRows);

  return (
    <S.Container>
      <div>
        <S.ContentContainer>
          <S.ContentInner>
            <S.Title>팀 / 동아리 프로젝트 계획서</S.Title>
            <S.RowContainer>
              <S.RowTitle>프로젝트 명</S.RowTitle>
              <S.RowLineContent>Teamit</S.RowLineContent>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>진행 기간</S.RowTitle>
              <S.Time
                placeholder="시간을 선택해주세요..."
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(<DatePicker datesState={[dates, setDates]} />);
                }}
              >
                {dates &&
                  `${dateToString(dates.start)} ~ ${dateToString(dates.end)}`}
              </S.Time>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>신청자</S.RowTitle>
              <S.RowLineContent>2105 김진근</S.RowLineContent>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>프로젝트 및 팀원 역할</S.RowTitle>
              <S.Members>
                <S.MemberContainer>
                  <S.MemberName>2105 김진근</S.MemberName>
                  <S.MemberRoleContainer>
                    <S.Role>디자인</S.Role>
                    <S.Role>프론트 엔드 개발</S.Role>
                  </S.MemberRoleContainer>
                </S.MemberContainer>
                <S.MemberContainer>
                  <S.MemberName>2107 김해교</S.MemberName>
                  <S.MemberRoleContainer>
                    <S.Role>프론트 엔드 개발</S.Role>
                  </S.MemberRoleContainer>
                </S.MemberContainer>
                <S.MemberContainer>
                  <S.MemberName>2405 박준형</S.MemberName>
                  <S.MemberRoleContainer>
                    <S.Role>백 엔드 개발</S.Role>
                  </S.MemberRoleContainer>
                </S.MemberContainer>
              </S.Members>
            </S.RowContainer>
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
                  <CheckBox isActive={false}>결과 보고서</CheckBox>
                  <CheckBox isActive={false}>프로그램 코드</CheckBox>
                  <CheckBox isActive={false}>실행물 (영상 또는 사진)</CheckBox>
                  <CheckBox isActive={false}>기타</CheckBox>
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
      <S.CommentContainer>
        <div>
          <S.CommentTitle>댓글&nbsp;</S.CommentTitle>
          <S.CommentTitleBlue>2개</S.CommentTitleBlue>
        </div>
        <CommentInput type="report" />
        <Comment type="report" />
        <Comment type="report" />
      </S.CommentContainer>
    </S.Container>
  );
};

export default Team;
