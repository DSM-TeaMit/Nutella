import * as S from "./styles";
import React, { useState } from "react";
import { useFeed } from "../../queries/Feed";
import FeedList from "../FeedList";
import { Order } from "../../utils/api/Feed";

interface Meue {
  name: string;
  key: Order;
}

const Feed = () => {
  const initPage = 1;
  const [currentTab, setCurrentTab] = useState(0);
  const [orderName, setOrderName] = useState<Order>("popularity");
  const popularityQuery = useFeed("popularity", initPage);
  const recentlyQuery = useFeed("recently", initPage);

  const menuHandler = (index: React.SetStateAction<number>, name: Order) => {
    setCurrentTab(index);
    setOrderName(name);
  };

  const menuArr: Meue[] = [
    {
      name: "인기있는 프로젝트",
      key: "popularity",
    },
    {
      name: "최신 프로젝트",
      key: "recently",
    },
  ];

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
          {orderName === "popularity" ? (
            <FeedList key="popularity" queryData={popularityQuery} initPage={initPage} />
          ) : (
            <FeedList key="recently" queryData={recentlyQuery} initPage={initPage} />
          )}
        </S.ElementBox>
      </S.FeedContent>
    </S.Container>
  );
};

export default Feed;
