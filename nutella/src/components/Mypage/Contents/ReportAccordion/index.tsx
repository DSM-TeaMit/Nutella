import * as S from "./styles";
import Arrow from "../../../../assets/icons/up_arrow.svg";
import ReportCard from "../../../ReportCard";

const ReportAccordion = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <div>
          <S.Title>승인 대기중인 보고서</S.Title>
          <S.Count>12</S.Count>
        </div>
        <img alt="arrow" src={Arrow} />
      </S.HeaderContainer>
      <S.ContentContainer>
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </S.ContentContainer>
    </S.Container>
  );
};

export default ReportAccordion;
