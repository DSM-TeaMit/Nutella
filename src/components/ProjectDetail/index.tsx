import * as S from "./styles";
import Aside from "./Aside";
import Top from "./Top";
import SubmitContent from "./SubmitContent";
import CommentContainer from "../CommentContainer";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useProjectDetails } from "../../queries/ProjectDetails";

const ProjectDetail = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data, isError, isLoading, isFetching } = useProjectDetails(uuid);

  useTitle(`${data?.data.projectName}`);
  console.log(data?.data);

  return (
    <S.Container>
      <S.ProjectDetailContent>
        <S.DetailContent>
          <Top data={data?.data} />
          <SubmitContent data={data?.data} />
          <CommentContainer
            styleType="project"
            source="project"
            uuid={uuid || ""}
          />
        </S.DetailContent>
        <S.SideContent>
          <Aside data={data?.data.members} />
        </S.SideContent>
      </S.ProjectDetailContent>
    </S.Container>
  );
};

export default ProjectDetail;
