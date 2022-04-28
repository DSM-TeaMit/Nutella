import { FC, useMemo, useState } from "react";
import { UseInfiniteQueryResult } from "react-query";
import isMore from "../../constant/IsMore";
import LIMIT from "../../constant/Limit";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import usePagination, { List } from "../../hooks/usePagination";
import Page from "../../interface/Page";
import { Project } from "../../utils/api/Feed";
import MainProjectCard from "../Cards/MainProjectCard";
import MainProjectSkeleton from "../Cards/MainProjectSkeleton";
import * as S from "./styles";

interface PropsType {
  queryData: UseInfiniteQueryResult<Page<List<Project>>, unknown>;
  initPage: number;
}

const FeedList: FC<PropsType> = ({ queryData, initPage }) => {
  const { data, isError, isLoading, isFetching, fetchNextPage, isFetchingNextPage } = queryData;
  const { prevPage, count, list } = usePagination(data, initPage);
  const [page, setPage] = useState<number>(prevPage);

  const onNextPage = () => {
    if (!data || !count) {
      return;
    }

    if (isMore(LIMIT, page, count) && !(isLoading || isError || isFetching)) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  };

  const skeletons = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map((_, index) => <MainProjectSkeleton key={index} />),
    []
  );
  const ref = useInfiniteScroll<HTMLDivElement>(onNextPage, !(isLoading || isError || isFetching));

  return (
    <>
      <S.ProjectBox>
        {isLoading
          ? skeletons
          : list?.map((item: Project) => <MainProjectCard key={item.uuid} data={item} />)}
        {!isLoading && isFetchingNextPage && skeletons}
      </S.ProjectBox>
      <div ref={ref} />
      {count === 0 && (
        <>
          <S.Message>프로젝트가 없습니다.</S.Message>
          <S.Gap />
        </>
      )}
    </>
  );
};

export default FeedList;
