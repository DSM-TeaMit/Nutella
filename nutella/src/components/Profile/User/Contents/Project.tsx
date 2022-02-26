import * as I from "../../styles";
import ProjectCard from "../../../ProjectCard";
import { useParams } from "react-router-dom";
import { useUserProjects } from "../../../../queries/User";
import { useState } from "react";

const Project = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading } = useUserProjects(uuid || "", page);

  if (!uuid) {
    return <></>;
  }

  if (isError || isLoading) {
    return <></>;
  }

  const { count, projects } = data!.data;

  return (
    <I.ContentInner>
      <I.FlexContainer>
        <div>
          <I.ProjectTitle>
            <div>
              <I.H3>프로젝트&nbsp;</I.H3>
              <I.BlueH3>{count}</I.BlueH3>
            </div>
          </I.ProjectTitle>
          <I.Grid>
            {projects.map((value) => (
              <ProjectCard key={value.uuid} data={value} />
            ))}
          </I.Grid>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Project;
