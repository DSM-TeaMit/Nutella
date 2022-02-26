import * as I from "../../styles";
import { ArrowBlackIcons, GithubBlackIcons } from "../../../../assets/icons";
import ProjectCard from "../../../ProjectCard";
import GithubReadme from "../../../GithubReadme";
import { FC } from "react";
import { UserProfileType } from "../../../../utils/api/User";
import { UseQueryResult } from "react-query";
import { AxiosResponse } from "axios";

interface PropsType {
  data: UseQueryResult<AxiosResponse<UserProfileType, any>, unknown>;
}

const Profile: FC<PropsType> = ({ data: queryData }) => {
  const { data, isLoading, isError } = queryData;

  if (isLoading || isError) {
    return <></>;
  }

  const { name, studentNo, projects, projectCount, githubId } = data!.data;

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
            <I.H3>프로젝트&nbsp;</I.H3>
            <I.BlueH3>{projectCount}</I.BlueH3>
          </I.ContentTitle>
          <I.Grid>
            {projects.map((value) => (
              <ProjectCard key={value.uuid} data={value} />
            ))}
          </I.Grid>
          {projectCount === 0 && (
            <I.Message>프로젝트가 존재하지 않습니다.</I.Message>
          )}
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Profile;
