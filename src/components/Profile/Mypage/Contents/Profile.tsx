import * as I from "../../styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../../assets/icons";
import ReportCard from "../../../Cards/ReportCard";
import ProjectCard from "../../../Cards/ProjectCard";
import GithubReadme from "../../../GithubReadme";
import { UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";
import { MyProfileType } from "../../../../utils/api/User";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import Error from "../../Error";
import ProfileSkleton from "../../Skeletons/ProfileSkleton";

interface PropsType {
  data: UseQueryResult<AxiosResponse<MyProfileType, unknown>, unknown>;
}

const Profile: FC<PropsType> = ({ data: queryData }) => {
  const { data, isLoading, isError } = queryData;

  useEffect(() => {
    if (isError) {
      toast.error("프로필을 가져올 수 없습니다.");
    }
  }, [isError]);

  if (isLoading) {
    return <ProfileSkleton />;
  }

  if (isError) {
    return <Error message="오류 발생. 프로필을 가져올 수 없습니다. 다시 시도해주세요." />;
  }

  const {
    name,
    studentNo,
    projectCount,
    githubId,
    pendingCount,
    pendingReports: pendingReports,
    projects,
    thumbnailUrl,
  } = data!.data;

  return (
    <I.ContentInner>
      <I.FlexContainer>
        <I.ProfileContainerOuter>
          <I.ProfileContainer>
            <I.ProfileImage alt="profile image" src={thumbnailUrl} isProfile />
            <I.ProfileInfoContainer>
              <I.Name>
                {studentNo} {name}
              </I.Name>
              <I.ProfileDescriptionContainer>
                <I.ProfileDescription>프로젝트 {projectCount}</I.ProfileDescription>
                {githubId && (
                  <I.Github onClick={() => window.open(`https://github.com/${githubId}`, "_blank")}>
                    <img alt="github" src={GithubBlackIcons} />
                    <div>{githubId}</div>
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
            {pendingReports.map((value) => (
              <ReportCard key={value.uuid} data={value} />
            ))}
          </I.Grid>
          {pendingCount === 0 && <I.Message>승인 대기중인 보고서가 존재하지 않습니다.</I.Message>}
        </div>
        <div>
          <I.ContentTitle>
            <I.H3>프로젝트&nbsp;</I.H3>
            <I.BlueH3>{projectCount}</I.BlueH3>
          </I.ContentTitle>
          <I.Grid>
            {projects.map((value) => (
              <ProjectCard key={value.uuid} data={value} />
            ))}
          </I.Grid>
          {projectCount === 0 && <I.Message>프로젝트가 존재하지 않습니다.</I.Message>}
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Profile;
