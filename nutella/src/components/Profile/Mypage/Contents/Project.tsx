import * as S from "./styles";
import * as I from "../../styles";
import ProjectCard from "../../../ProjectCard";
import { Fragment, useCallback } from "react";
import useModalContext from "../../../../hooks/useModalContext";
import ProjectAddModal from "../../../Modals/ProejctAddModal";
import { useUserProjects } from "../../../../queries/User";
import useModalRef from "../../../../hooks/useModalRef";
import ModalPortal from "../../../ModalPortal";

const Project = () => {
  const { openModal } = useModalContext();
  const modalRef = useModalRef();
  const { data, isError, isLoading } = useUserProjects(
    "e973c27b-3e0e-4863-86be-b2e0dfd24908"
  );

  const onMessageAddClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      modalRef.current?.show();
    },
    [openModal]
  );

  if (isError || isLoading) {
    return <></>;
  }

  const { count, projects } = data!.data;

  return (
    <I.ContentInner>
      <I.FlexContainer>
        <div>
          <I.ProjectTitle>
            <div>
              <I.H3>프로젝트&nbsp;</I.H3>
              <I.BlueH3>{count}</I.BlueH3>
            </div>
            <S.AddProject onClick={onMessageAddClick}>+ 프로젝트 생성</S.AddProject>
          </I.ProjectTitle>
          <I.Grid>
            {projects.map((value) => (
              <ProjectCard key={value.uuid} data={value} />
            ))}
          </I.Grid>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Project;
