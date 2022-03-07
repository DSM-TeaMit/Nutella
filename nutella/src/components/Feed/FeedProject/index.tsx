import Project from "../../Cards/MainProjectCard";
import * as S from "./styles";
import { FC } from "react";

interface PropsType {
  total: number;
}

const FeedProject: FC<PropsType> = ({ total }) => {
  return (
    <S.ProjectBox>
      {new Array(total).fill(0).map(() => (
        <Project />
      ))}
    </S.ProjectBox>
  );
};

export default FeedProject;
