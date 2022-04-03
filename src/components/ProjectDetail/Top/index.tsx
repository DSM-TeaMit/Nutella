import * as S from "./styles";
import { ProfileIcons, ViewIcons } from "../../../assets/icons";
import ProjectModifyModal from "../../Modals/ProjectInfoModify";
import { FC, Fragment } from "react";
import ModalPortal from "../../ModalPortal";
import useModalRef from "../../../hooks/useModalRef";
import { Project } from "../../../utils/api/ProjectDetails";

interface PropsType {
  data: Project | undefined;
}

const Top: FC<PropsType> = ({ data }) => {
  const Field = ["웹", "보안", "임베디드", "대마고"];
  const modalRef = useModalRef();

  return (
    <Fragment>
      <S.TopContainer>
        <S.TopContent>
          <S.ProjectImg alt="" src="" />
          <div>
            <S.ProjectTop>
              <S.ProjectName>{data?.projectName}</S.ProjectName>
              <S.ProjectRincian>
                <div>
                  <img src={ViewIcons} />
                  <S.Font>{data?.projectView}</S.Font>
                  <img src={ProfileIcons} />
                  <S.Font>{data?.projectType}</S.Font>
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
                {data?.projectField.split(",").map((item, index) => {
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
