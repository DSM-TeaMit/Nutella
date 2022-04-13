import * as S from "./styles";
import Aside from "./Aside";
import Top from "./Top";
import SubmitContent from "./SubmitContent";
import CommentContainer from "../CommentContainer";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useProjectDetails } from "../../queries/ProjectDetails";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProjectDetail = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data, isError, isLoading } = useProjectDetails(uuid);

  useTitle(isError ? "오류 발생" : `${data?.data.projectName}`);

  useEffect(() => {
    if (isError) {
      toast.error("오류가 발생했습니다, 다시 시도해 주세요.");
    }
  }, [isError]);

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
