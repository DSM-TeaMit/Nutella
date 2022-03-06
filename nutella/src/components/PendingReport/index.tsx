import { useState } from "react";
import { usePendingReport } from "../../queries/PendingReport";
import PendingReportCard from "../PendingReportCard";
import * as S from "./styles";

const PendingReport = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = usePendingReport(page);

  if (isLoading) {
    return (
      <S.Container>
        <div>
          <S.Title>승인 요청 보고서&nbsp;</S.Title>
        </div>
        <S.Message>승인 요청 보고서 가져오는 중...</S.Message>
      </S.Container>
    );
  }

  if (isError) {
    return (
      <S.Container>
        <S.Message>:(</S.Message>
        <S.Message>승인 요청 보고서를 가져올 수 없습니다.</S.Message>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <div>
        <S.Title>승인 요청 보고서&nbsp;</S.Title>
        <S.Count>{data?.data.count}</S.Count>
      </div>
      <S.List>
        {data?.data.projects.map((value) => {
          return <PendingReportCard data={value} />;
        })}
      </S.List>
    </S.Container>
  );
};

export default PendingReport;
