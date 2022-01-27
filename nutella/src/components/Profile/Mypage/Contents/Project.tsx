import * as S from "./styles";
import * as I from "../../styles";
import ProjectCard from "../../../ProjectCard";
import { useCallback } from "react";
import useModalContext from "../../../../hooks/useModalContext";
import ProjectAddModal from "../../../Modals/ProejctAddModal";

const Project = () => {
  const { openModal } = useModalContext();

  const onMessageAddClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      openModal(<ProjectAddModal />);
    },
    [openModal]
  );

  return (
    <I.ContentInner>
      <I.FlexContainer>
        <div>
          <I.ProjectTitle>
            <div>
              <I.H3>프로젝트&nbsp;</I.H3>
              <I.BlueH3>12</I.BlueH3>
            </div>
            <S.AddProject onClick={onMessageAddClick}>+ 프로젝트 생성</S.AddProject>
          </I.ProjectTitle>
          <I.Grid>
            {new Array(12).fill(0).map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </I.Grid>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Project;
