import * as I from "../../styles";
import ProjectCard from "../../../ProjectCard";

const Project = () => {
  return (
    <I.ContentInner>
      <I.FlexContainer>
        <div>
          <I.ProjectTitle>
            <div>
              <I.H3>프로젝트&nbsp;</I.H3>
              <I.BlueH3>12</I.BlueH3>
            </div>
          </I.ProjectTitle>
          <I.Grid>
            {new Array(12).fill(0).map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </I.Grid>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Project;
