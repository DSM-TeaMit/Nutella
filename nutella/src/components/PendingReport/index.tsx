import PendingReportCard from "../PendingReportCard";
import * as S from "./styles";

const PendingReport = () => {
  return (
    <S.Container>
      <div>
        <S.Title>승인 요청 보고서&nbsp;</S.Title>
        <S.Count>12</S.Count>
      </div>
      <S.List>
        <PendingReportCard />
        <PendingReportCard />
        <PendingReportCard />
        <PendingReportCard />
        <PendingReportCard />
      </S.List>
    </S.Container>
  );
};

export default PendingReport;
