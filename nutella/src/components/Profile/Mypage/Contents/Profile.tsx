import * as I from "../../styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../../assets/icons";
import ReportCard from "../../../ReportCard";
import ProjectCard from "../../../ProjectCard";
import { useMyProfile } from "../../../../queries/User";
import GithubReadme from "../../../GithubReadme";
import { UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { MyProfileType } from "../../../../utils/api/User";
import { FC } from "react";

interface PropsType {
  data: UseQueryResult<AxiosResponse<MyProfileType, any>, unknown>;
}

const Profile: FC<PropsType> = ({ data: queryData }) => {
  const { data, isLoading, isError } = queryData;

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
