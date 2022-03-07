import { useCallback, useEffect, useRef, useState } from "react";
import isMore from "../../constant/IsMore";
import LIMIT from "../../constant/Limit";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { usePendingReport } from "../../queries/PendingReport";
import PendingReportCard from "../PendingReportCard";
import * as S from "./styles";

const PendingReport = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = usePendingReport(1);

  const onNextPage = useCallback(() => {
    console.log("qq");
    if (!data) {
      return;
    }

    console.log("aa");
    setPage((prev) => prev + 1);
  }, [page, data]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const ref = useInfiniteScroll<HTMLDivElement>(onNextPage);

  if (isLoading) {
    return (
      <S.Container>
        <S.Message>승인 요청 보고서 가져오는 중...</S.Message>
        <S.Gap />
      </S.Container>
    );
  }

  if (isError) {
    return (
      <S.Container>
        <S.Message>:(</S.Message>
        <S.Message>승인 요청 보고서를 가져올 수 없습니다.</S.Message>
        <S.Gap />
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
        {new Array(page * LIMIT).fill(0).map((_, index) => (
          <PendingReportCard
            key={index}
            data={{
              projectName: "teamit",
              projectType: "PERS",
              reportType: "PLAN",
              submittedAt: new Date().toString(),
              uuid: "",
              writer: { name: "김진근", studentNo: 3203 },
            }}
          />
        ))}
      </S.List>
      <div ref={ref} />
      {data?.data.count === 0 && (
        <>
          <S.Message>승인 요청 보고서가 없습니다.</S.Message>
          <S.Gap />
        </>
      )}
    </S.Container>
  );
};

export default PendingReport;
