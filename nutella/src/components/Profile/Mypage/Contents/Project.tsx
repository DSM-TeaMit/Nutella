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
          <S.ProjectTitle>
            <div>
              <S.H3>프로젝트&nbsp;</S.H3>
              <S.BlueH3>12</S.BlueH3>
            </div>
            <S.AddProject onClick={onMessageAddClick}>+ 프로젝트 생성</S.AddProject>
          </S.ProjectTitle>
          <S.Grid>
            {new Array(12).fill(0).map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </S.Grid>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Project;
