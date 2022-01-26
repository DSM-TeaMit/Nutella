import * as I from "../../styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../../assets/icons";

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
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Profile;
