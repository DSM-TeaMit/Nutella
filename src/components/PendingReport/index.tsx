import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import isMore from "../../constant/IsMore";
import LIMIT from "../../constant/Limit";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import usePagination from "../../hooks/usePagination";
import { usePendingReport } from "../../queries/PendingReport";
import PendingReportCard from "../Cards/PendingReportCard";
import PendingReportSkeleton from "../Cards/PendingReportSkeleton";
import * as S from "./styles";

const PendingReport = () => {
  const initPage = 1;
  const { data, isLoading, isError, isFetching, error, fetchNextPage, isFetchingNextPage } =
    usePendingReport(initPage);
  const { count, list, prevPage } = usePagination(data, initPage);

  const [page, setPage] = useState<number>(prevPage);
  const navigate = useNavigate();

  const onNextPage = useCallback(() => {
    if (!count) {
      return;
    }

    if (isMore(LIMIT, page, count)) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [count, page, fetchNextPage]);

  const ref = useInfiniteScroll<HTMLDivElement>(onNextPage, !(isLoading || isError || isFetching));

  useEffect(() => {
    if (isError && (!axios.isAxiosError(error) || error.response?.status !== 403)) {
      toast.error("오류 발생. 다시 시도해주세요.");
      return;
    }

    if (isError) {
      toast.error("접근 권한이 없습니다.");
      navigate("/feed");
    }
  }, [error, isError, navigate]);

  const skeleton = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((_, index) => <PendingReportSkeleton key={index} />),
    []
  );

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
        <S.Count>{count}</S.Count>
      </div>
      <S.List>
        {isLoading && skeleton}
        {list?.map((value) => {
          return <PendingReportCard data={value} key={value.uuid} />;
        })}
        {isFetchingNextPage && skeleton}
      </S.List>
      <div ref={ref} />
      {count === 0 && (
        <>
          <S.Message>승인 요청 보고서가 없습니다.</S.Message>
          <S.Gap />
        </>
      )}
    </S.Container>
  );
};

export default PendingReport;
