import * as S from "./styles";
import { ContentInner } from "../styles";
import ProjectCard from "../../ProjectCard";

const Project = () => {
  return (
    <ContentInner>
      <S.Container>
        <div>
          <S.ContentTitle>
            <S.H3>프로젝트&nbsp;</S.H3>
            <S.BlueH3>12</S.BlueH3>
          </S.ContentTitle>
          <S.Grid>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </S.Grid>
        </div>
      </S.Container>
    </ContentInner>
  );
};

export default Project;
