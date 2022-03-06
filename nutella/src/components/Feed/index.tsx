import * as S from "./styles";
import FeedTitleType from "../../interface/FeedTitle";
import FeedProject from "./FeedProject";
import { useState } from "react";
import React from "react";

interface PropsType {
  total: number;
}

const Feed = () => {
  const PopularFeed = 1;
  const NewFeed = 2;
  const [contentState, setContentState] = useState(PopularFeed);

  const onPopularFeedClick = () => {
    setContentState(PopularFeed);
  };

  const onNewFeedClick = () => {
    setContentState(NewFeed);
  };

  const title: FeedTitleType[] = [
    {
      title: "인기있는 프로젝트",
      onClick: onPopularFeedClick,
    },
    {
      title: "최근 프로젝트",
      onClick: onNewFeedClick,
    },
  ];

  const renderContent = (): JSX.Element => {
    const contentMap = new Map<number, React.FC<PropsType>>()
      .set(PopularFeed, FeedProject)
      .set(NewFeed, FeedProject);
    const content = React.createElement(contentMap.get(contentState)!, {
      total: 8,
    });
    return <>{content}</>;
  };

  return (
    <S.Container>
      <S.FeedContent>
        <S.TitleBox>
          {title.map((value, index) => {
            return (
              <S.Title
                onClick={value.onClick}
                key={index}
                click={contentState === index + 1}
              >
                <span>{value.title}</span>
              </S.Title>
            );
          })}
        </S.TitleBox>
        <S.ElementBox>
          <div>{renderContent()}</div>
        </S.ElementBox>
      </S.FeedContent>
    </S.Container>
  );
};

export default Feed;
