import AsideSkeleton from "./Aside";
import CommentSkeleton from "./Comment";
import * as S from "./styles";
import SubmitContentSkeleton from "./SubmitContent";
import TopSkeleton from "./Top";

const ProjectDetailSkeleton = () => {
  return (
    <S.Container>
      <S.ProjectDetailContent>
        <S.DetailContent>
          <TopSkeleton />
          <SubmitContentSkeleton />
          <CommentSkeleton />
        </S.DetailContent>
        <S.SideContent>
          <AsideSkeleton />
        </S.SideContent>
      </S.ProjectDetailContent>
    </S.Container>
  );
};

export default ProjectDetailSkeleton;
