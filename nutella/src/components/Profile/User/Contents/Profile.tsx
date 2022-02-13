import * as I from "../../styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../../assets/icons";
import ProjectCard from "../../../ProjectCard";
import MarkdownRender from "../../../MarkdownRender";

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
          <I.Description>Github 에서 가져온 README</I.Description>
          <I.ReadMe>
            <MarkdownRender>{`### I want to be a Front-end developer 🙂\ni'm learning about:\n- JavaScript\n- TypeScript`}</MarkdownRender>
          </I.ReadMe>
        </div>
        <div>
          <I.ContentTitle>
            <I.H3>프로젝트&nbsp;</I.H3>
            <I.BlueH3>12</I.BlueH3>
          </I.ContentTitle>
          <I.Grid>
            {new Array(4).fill(0).map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </I.Grid>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Profile;
