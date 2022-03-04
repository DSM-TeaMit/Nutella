import * as S from "./styles";
import * as I from "../../styles";
import ProjectCard from "../../../ProjectCard";
import { Fragment, useCallback, useEffect, useState } from "react";
import useModalContext from "../../../../hooks/useModalContext";
import ProjectAddModal from "../../../Modals/ProejctAddModal";
import { useMyProjects } from "../../../../queries/User";
import useModalRef from "../../../../hooks/useModalRef";
import ModalPortal from "../../../ModalPortal";
import { LIMIT } from "../../../../utils/api/User";
import isMore from "../../../../constant/IsMore";
import toast from "react-hot-toast";
import Loading from "../../Loading";
import Error from "../../Error";

const Project = () => {
  const { openModal } = useModalContext();
  const modalRef = useModalRef();
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading } = useMyProjects(page);

  const onProjectAddClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      modalRef.current?.show();
    },
    [openModal]
  );

  useEffect(() => {
    if (isError) {
      toast.error("유저 프로젝트를 가져올 수 없습니다.");
    }
  }, [isError]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error message="오류 발생. 프로젝트를 가져올 수 없습니다. 다시 시도해주세요." />
    );
  }

  const { count, projects } = data!.data;

  return (
    <Fragment>
      <I.ContentInner>
        <I.FlexContainer>
          <div>
            <I.ProjectTitle>
              <div>
                <I.H3>프로젝트&nbsp;</I.H3>
                <I.BlueH3>{count}</I.BlueH3>
              </div>
              <S.AddProject onClick={onProjectAddClick}>
                + 프로젝트 생성
              </S.AddProject>
            </I.ProjectTitle>
            <I.Grid>
              {projects.map((value) => (
                <ProjectCard key={value.uuid} data={value} />
              ))}
            </I.Grid>
            {projects.length === 0 && (
              <I.Message>프로젝트가 존재하지 않습니다.</I.Message>
            )}
            {isMore(LIMIT, page, count) && (
              <I.More onClick={() => setPage((prev) => prev + 1)}>
                더 가져오기...
              </I.More>
            )}
          </div>
        </I.FlexContainer>
      </I.ContentInner>
      <ModalPortal ref={modalRef}>
        <ProjectAddModal />
      </ModalPortal>
    </Fragment>
  );
};

export default Project;
