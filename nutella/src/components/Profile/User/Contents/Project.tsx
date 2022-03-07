import * as I from "../../styles";
import ProjectCard from "../../../Cards/ProjectCard";
import { useParams } from "react-router-dom";
import { useUserProjects } from "../../../../queries/User";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../Loading";
import Error from "../../Error";

const Project = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading } = useUserProjects(uuid || "", page);

  useEffect(() => {
    if (isError) {
      toast.error("프로젝트를 가져올 수 없습니다.");
    }
  }, [isError]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error message="오류 발생. 유저 프로젝트를 가져올 수 없습니다. 다시 시도해주세요." />
    );
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
