import * as S from "./styles";
import { useState } from "react";
import React from "react";
import { useFeed } from "../../queries/Feed";
import Project from "../Cards/MainProjectCard";

const Feed = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: "인기있는 프로젝트", key: "popularity", content: <Project /> },
    { name: "최신 프로젝트", key: "recently", content: <Project /> },
  ];
  const { data, isError, isSuccess, isLoading } = useFeed();

  const menuHandler = (index: React.SetStateAction<number>) => {
    setCurrentTab(index);
  };

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
                onClick={() => menuHandler(index)}
              >
                {str.name}
              </S.Title>
            );
          })}
        </S.TitleBox>
        <S.ElementBox>
          <div>{menuArr[currentTab].content}</div>
        </S.ElementBox>
      </S.FeedContent>
    </S.Container>
  );
};

export default Feed;
