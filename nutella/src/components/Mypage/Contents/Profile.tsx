import { ContentInner } from "../styles";
import * as S from "./styles";
import GithubIcon from "../../../assets/icons/github_black.svg";
import ArrowIcon from "../../../assets/icons/arrow_black.svg";

const Profile = () => {
  return (
    <ContentInner>
      <S.ProfileContainerOuter>
        <S.ProfileContainer>
          <S.ProfileImage alt="" src="" />
          <S.ProfileInfoContainer>
            <S.Name>2105 김진근</S.Name>
            <S.ProfileDescriptionContainer>
              <S.ProfileDescription>프로젝트 12</S.ProfileDescription>
              <S.Github
                href="https://github.com/DSM-TeaMit/Nutella"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="github" src={GithubIcon} />
                KJG04
                <img alt="arrow" src={ArrowIcon} />
              </S.Github>
            </S.ProfileDescriptionContainer>
          </S.ProfileInfoContainer>
        </S.ProfileContainer>
        <S.Line />
      </S.ProfileContainerOuter>
    </ContentInner>
  );
};

export default Profile;
