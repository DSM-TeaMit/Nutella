import * as S from "./styles";
import { ContentInner } from "../styles";
import ProjectCard from "../../ProjectCard";

const Project = () => {
  return (
    <ContentInner>
      <S.Container>
        <div>
          <S.ProjectTitle>
            <div>
              <S.H3>프로젝트&nbsp;</S.H3>
              <S.BlueH3>12</S.BlueH3>
            </div>
            <S.AddProject>+ 프로젝트 추가</S.AddProject>
          </S.ProjectTitle>
          <S.Grid>
            {new Array(12).fill(0).map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </S.Grid>
        </div>
      </S.Container>
    </ContentInner>
  );
};

export default Project;
