import { ContentInner } from "../styles";
import * as S from "./styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../assets/icons";
import MarkdownRender from "../../MarkdownRender";
import ReportCard from "../../ReportCard";
import ProjectCard from "../../ProjectCard";

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
                  <img alt="github" src={GithubBlackIcons} />
                  KJG04
                  <img alt="arrow" src={ArrowBlackIcons} />
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
        <div>
          <S.ContentTitle>
            <S.H3>승인 대기중인 보고서&nbsp;</S.H3>
            <S.BlueH3>3</S.BlueH3>
          </S.ContentTitle>
          <S.Grid>
            {new Array(3).fill(0).map((_, index) => (
              <ReportCard key={index} />
            ))}
          </S.Grid>
        </div>
        <div>
          <S.ContentTitle>
            <S.H3>프로젝트&nbsp;</S.H3>
            <S.BlueH3>12</S.BlueH3>
          </S.ContentTitle>
          <S.Grid>
            {new Array(4).fill(0).map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </S.Grid>
        </div>
      </S.Container>
    </ContentInner>
  );
};

export default Profile;
