import * as S from "./styles";
import React, { useEffect, useState } from "react";
import { useFeed } from "../../queries/Feed";
import Project from "../Cards/MainProjectCard";
import toast from "react-hot-toast";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import isMore from "../../constant/IsMore";
import { FeedList } from "../../utils/api/Feed";

const Feed = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [orderName, setOrderName] = useState<string>("popularity");
  const { data, isError, isLoading, isFetching } = useFeed(orderName, page);

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
    if (!data) {
      return;
    }

    if (isMore(12, page, data.data.count)) {
      setPage((prev) => prev + 1);
    }
  };

  const ref = useInfiniteScroll<HTMLDivElement>(
    onNextPage,
    !(isLoading || isError || isFetching)
  );

  useEffect(() => {
    if (isError) {
      toast.error("가져온 프로젝트가 없습니다.");
    }
  }, [isError, orderName]);

  return (
    <S.Container>
      <S.FeedContent>
        <S.TitleBox>
          {menuArr.map((str, index) => {
            return (
              <S.Title
                className={`${
                  index === currentTab ? "submenu focused" : "submenu"
                }`}
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
            {data?.data?.projects.map((item: FeedList) => (
              <Project key={item.uuid} data={item} />
            ))}
          </S.ProjectBox>
          <div ref={ref} />
          {data?.data.count === 0 && (
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
