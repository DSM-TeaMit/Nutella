import ProjectSkeleton from "../../../Cards/ProjectSkeleton";
import * as S from "./styles";

const ProfileSkleton = () => {
  return (
    <S.ContentInner>
      <S.FlexContainer>
        <S.ProfileContainerOuter>
          <S.ProfileContainer>
            <S.ProfileImage />
            <S.ProfileInfoContainer>
              <span>
                <S.Name>this is name this is name </S.Name>
              </span>
              <S.ProfileDescriptionContainer>
                <span>
                  <S.ProfileDescription>프로젝트 123</S.ProfileDescription>
                </span>
              </S.ProfileDescriptionContainer>
            </S.ProfileInfoContainer>
          </S.ProfileContainer>
          <S.Line />
        </S.ProfileContainerOuter>
        <div>
          <S.ContentTitle>
            <S.H3>프로젝트&nbsp;</S.H3>
          </S.ContentTitle>
          <S.Grid>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <ProjectSkeleton key={index} />
              ))}
          </S.Grid>
        </div>
      </S.FlexContainer>
    </S.ContentInner>
  );
};

export default ProfileSkleton;
