import * as S from "./styles";
import Aside from "./Aside";
import Top from "./Top";
import SubmitContent from "./SubmitContent";
import CommentContainer from "../CommentContainer";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { uuid } = useParams<{ uuid: string }>();

  return (
    <S.Container>
      <S.ProjectDetailContent>
        <S.DetailContent>
          <Top />
          <SubmitContent />
          <CommentContainer
            styleType="project"
            source="project"
            uuid={uuid || ""}
          />
        </S.DetailContent>
        <S.SideContent>
          <Aside />
        </S.SideContent>
      </S.ProjectDetailContent>
    </S.Container>
  );
};

export default ProjectDetail;
