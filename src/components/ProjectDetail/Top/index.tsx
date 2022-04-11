import * as S from "./styles";
import {
  ClubIcons,
  PersonalIcons,
  TeamIcons,
  ViewIcons,
} from "../../../assets/icons";
import ProjectModifyModal from "../../Modals/ProjectInfoModify";
import { FC, Fragment, Key } from "react";
import ModalPortal from "../../ModalPortal";
import useModalRef from "../../../hooks/useModalRef";
import { Project } from "../../../utils/api/ProjectDetails";
import { ProjectTypes, ProjectLabel } from "../../../interface";

interface PropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Project | any;
}

const Top: FC<PropsType> = ({ data }) => {
  const modalRef = useModalRef();

  const projectType = new Map<ProjectTypes, ProjectLabel>()
    .set("PERS", {
      icon: PersonalIcons,
      text: "개인 프로젝트",
    })
    .set("CLUB", {
      icon: ClubIcons,
      text: "동아리 프로젝트",
    })
    .set("TEAM", {
      icon: TeamIcons,
      text: "팀 프로젝트",
    });

  const projectTypeData = projectType.get(data?.projectType);

  return (
    <Fragment>
      <S.TopContainer>
        <S.TopContent>
          <S.ProjectImg
            alt="프로젝트 이미지"
            src={data?.thumbnailUrl}
            emoji={data?.emoji}
          />
          <div>
            <S.ProjectTop>
              <S.ProjectName>{data?.projectName}</S.ProjectName>
              <S.ProjectRincian>
                <div>
                  <img src={ViewIcons} />
                  <S.Font>{data?.projectView}</S.Font>
                  <img alt="프로젝트 아이콘" src={projectTypeData?.icon} />
                  <S.Font>{projectTypeData?.text}</S.Font>
                </div>
                <S.Modify
                  onClick={(e) => {
                    e.stopPropagation();
                    modalRef.current?.show();
                  }}
                >
                  수정
                </S.Modify>
              </S.ProjectRincian>
            </S.ProjectTop>
            <S.ProjectContent>
              {data?.projectDescription === null ? (
                <div>프로젝트 소개가 없습니다.</div>
              ) : (
                data?.projectDescription
              )}
            </S.ProjectContent>
            <S.ProjectBottom>
              <div>
                {data?.projectField
                  .split(",")
                  .map((item: string, index: Key | null | undefined) => {
                    return <S.Field key={index}>{item}</S.Field>;
                  })}
              </div>
              <S.Step>{data?.projectStatus}</S.Step>
            </S.ProjectBottom>
          </div>
        </S.TopContent>
      </S.TopContainer>
      <ModalPortal ref={modalRef}>
        <ProjectModifyModal />
      </ModalPortal>
    </Fragment>
  );
};

export default Top;
