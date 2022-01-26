import * as S from "./styles";
import { ContentInner } from "../../styles";
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
    <ContentInner>
      <S.Container>
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
      </S.Container>
    </ContentInner>
  );
};

export default Project;
