import { ContentInner } from "../styles";
import * as S from "./styles";

const Profile = () => {
  return (
    <ContentInner>
      <S.ProfileContainer>
        <S.ProfileImage alt="" src="" />
        <S.ProfileInfoContainer>
          <S.Name>2105 김진근</S.Name>
          <S.ProfileDescriptionContainer>
            <S.ProfileDescription>프로젝트 12</S.ProfileDescription>
            <S.ProfileDescription>프로젝트 12</S.ProfileDescription>
          </S.ProfileDescriptionContainer>
        </S.ProfileInfoContainer>
      </S.ProfileContainer>
    </ContentInner>
  );
};

export default Profile;
