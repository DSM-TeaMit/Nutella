import Project from "../../Project/Project";
import * as S from "./styles";
import { FC } from "react";

interface PropsType {
  total: number;
}

const FeedProject: FC<PropsType> = ({ total }) => {
  return (
    <S.ProjectBox>
      {new Array(total).fill(0).map((_, index) => (
        <Project key={index} />
      ))}
    </S.ProjectBox>
  );
};

export default FeedProject;
