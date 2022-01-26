import * as I from "../../styles";
import * as S from "./styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../../assets/icons";
import MarkdownRender from "../../../MarkdownRender";
import ReportCard from "../../../ReportCard";
import ProjectCard from "../../../ProjectCard";

const Profile = () => {
  return (
    <I.ContentInner>
      <I.FlexContainer>
        <I.ProfileContainerOuter>
          <I.ProfileContainer>
            <I.ProfileImage alt="" src="" />
            <I.ProfileInfoContainer>
              <I.Name>2105 김진근</I.Name>
              <I.ProfileDescriptionContainer>
                <I.ProfileDescription>프로젝트 12</I.ProfileDescription>
                <I.Github
                  href="https://github.com/DSM-TeaMit/Nutella"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="github" src={GithubBlackIcons} />
                  KJG04
                  <img alt="arrow" src={ArrowBlackIcons} />
                </I.Github>
              </I.ProfileDescriptionContainer>
            </I.ProfileInfoContainer>
          </I.ProfileContainer>
          <I.Line />
        </I.ProfileContainerOuter>
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
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Profile;
