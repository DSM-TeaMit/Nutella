import * as S from "./styles";
import React, { useEffect, useMemo, useState } from "react";
import { useFeed } from "../../queries/Feed";
import MainProjectCard from "../Cards/MainProjectCard";
import toast from "react-hot-toast";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import isMore from "../../constant/IsMore";
import { Project } from "../../utils/api/Feed";
import LIMIT from "../../constant/Limit";
import MainProjectSkeleton from "../Cards/MainProjectSkeleton";
import usePagination from "../../hooks/usePagination";

const Feed = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const initPage = 1;
  const [orderName, setOrderName] = useState<string>("popularity");
  const { data, isError, isLoading, isFetching, fetchNextPage, isFetchingNextPage } = useFeed(
    orderName,
    initPage
  );
  const { prevPage, count, list } = usePagination(data, initPage);
  const [page, setPage] = useState<number>(prevPage);

  const menuHandler = (index: React.SetStateAction<number>, name: string) => {
    setCurrentTab(index);
    setOrderName(name);
  };

  const menuArr = [
    {
      name: "인기있는 프로젝트",
      key: "popularity",
    },
    {
      name: "최신 프로젝트",
      key: "recently",
    },
  ];

  const onNextPage = () => {
    if (!data || !count) {
      return;
    }

    if (isMore(LIMIT, page, count)) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  };

  const ref = useInfiniteScroll<HTMLDivElement>(onNextPage, !(isLoading || isError || isFetching));

  useEffect(() => {
    if (isError) {
      toast.error("피드를 가져오는 중 오류가 발생했습니다.");
    }
  }, [isError, orderName]);

  const skeletons = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map((_, index) => <MainProjectSkeleton key={index} />),
    []
  );

  return (
    <S.Container>
      <S.FeedContent>
        <S.TitleBox>
          {menuArr.map((str, index) => {
            return (
              <S.Title
                className={`${index === currentTab ? "submenu focused" : "submenu"}`}
                key={index}
                onClick={() => menuHandler(index, str.key)}
              >
                {str.name}
              </S.Title>
            );
          })}
        </S.TitleBox>
        <S.ElementBox>
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
        </S.ElementBox>
      </S.FeedContent>
    </S.Container>
  );
};

export default Feed;
