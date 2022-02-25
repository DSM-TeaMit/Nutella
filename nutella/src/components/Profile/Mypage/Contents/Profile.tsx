import * as I from "../../styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../../assets/icons";
import ReportCard from "../../../ReportCard";
import ProjectCard from "../../../ProjectCard";
import { useMyProfile } from "../../../../queries/User";
import GithubReadme from "../../../GithubReadme";

const Profile = () => {
  const { data, isLoading, isError } = useMyProfile(
    "e973c27b-3e0e-4863-86be-b2e0dfd24908"
  );

  if (isLoading || isError) {
    return <></>;
  }

  const {
    name,
    studentNo,
    projectCount,
    githubId,
    pendingCount,
    pendingProjects: pendingReports,
    projects,
    email,
  } = data!.data;

  return (
    <I.ContentInner>
      <I.FlexContainer>
        <I.ProfileContainerOuter>
          <I.ProfileContainer>
            <I.ProfileImage alt="" src="" />
            <I.ProfileInfoContainer>
              <I.Name>
                {studentNo} {name}
              </I.Name>
              <I.ProfileDescriptionContainer>
                <I.ProfileDescription>
                  프로젝트 {projectCount}
                </I.ProfileDescription>
                {githubId && (
                  <I.Github
                    href={`https://github.com/${githubId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="github" src={GithubBlackIcons} />
                    {githubId}
                    <img alt="arrow" src={ArrowBlackIcons} />
                  </I.Github>
                )}
              </I.ProfileDescriptionContainer>
            </I.ProfileInfoContainer>
          </I.ProfileContainer>
          <I.Line />
        </I.ProfileContainerOuter>
        <GithubReadme githubId={githubId} />
        <div>
          <I.ContentTitle>
            <I.H3>승인 대기중인 보고서&nbsp;</I.H3>
            <I.BlueH3>{pendingCount}</I.BlueH3>
          </I.ContentTitle>
          <I.Grid>
            {pendingReports.map((_, index) => (
              <ReportCard key={index} />
            ))}
          </I.Grid>
        </div>
        <div>
          <I.ContentTitle>
            <I.H3>프로젝트&nbsp;</I.H3>
            <I.BlueH3>{projectCount}</I.BlueH3>
          </I.ContentTitle>
          <I.Grid>
            {projects.map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </I.Grid>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Profile;
