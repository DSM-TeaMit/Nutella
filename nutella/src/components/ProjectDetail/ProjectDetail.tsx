import * as S from "./styles";
import Aside from "./Aside";
import Top from "./Top";
import Comment from "./Comment";
import SubmitContent from "./SubmitContent";

const ProjectDetail = () => {
  return (
    <>
      <S.Container>
        <S.ProjectDetailContent>
          <S.DetailContent>
            <Top />
            <SubmitContent />
            <Comment />
          </S.DetailContent>
          <S.SideContent>
            <Aside />
          </S.SideContent>
        </S.ProjectDetailContent>
      </S.Container>
    </>
  );
};

export default ProjectDetail;
