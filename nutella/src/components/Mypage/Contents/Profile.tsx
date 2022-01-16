import { ContentInner } from "../styles";
import * as S from "./styles";
import GithubIcon from "../../../assets/icons/github_black.svg";
import ArrowIcon from "../../../assets/icons/arrow_black.svg";
import MarkdownRender from "../../MarkdownRender";

const Profile = () => {
  return (
    <ContentInner>
      <S.Container>
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
        <div>
          <S.Description>Github 에서 가져온 README</S.Description>
          <S.ReadMe>
            <MarkdownRender>{`### I want to be a Front-end developer 🙂\ni'm learning about:\n- JavaScript\n- TypeScript`}</MarkdownRender>
          </S.ReadMe>
        </div>
      </S.Container>
    </ContentInner>
  );
};

export default Profile;
