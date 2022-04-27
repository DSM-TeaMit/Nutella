import * as S from "./styles";
import * as I from "../../styles";
import ProjectCard from "../../../Cards/ProjectCard";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import ProjectAddModal from "../../../Modals/ProejctAdd";
import { useMyProjects } from "../../../../queries/User";
import useModalRef from "../../../../hooks/useModalRef";
import ModalPortal from "../../../ModalPortal";
import isMore from "../../../../constant/IsMore";
import toast from "react-hot-toast";
import Error from "../../Error";
import LIMIT from "../../../../constant/Limit";
import ProjectSkeleton from "../../../Cards/ProjectSkeleton";
import usePagination from "../../../../hooks/usePagination";

const Project = () => {
  const modalRef = useModalRef();
  const initPage = 1;
  const { data, isError, isLoading, isFetching, fetchNextPage, isFetchingNextPage } =
    useMyProjects(initPage);
  const { prevPage, count, list } = usePagination(data, initPage);
  const [page, setPage] = useState<number>(prevPage);

  const onNextPage = useCallback(() => {
    if (!count) {
      return;
    }

    if (isMore(LIMIT, page, count)) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [count, fetchNextPage, page]);

  const onProjectAddClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      modalRef.current?.show();
    },
    [modalRef]
  );

  const skeleton = useMemo(
    () =>
      Array(3)
        .fill(0)
        .map((_, index) => <ProjectSkeleton key={index} />),
    []
  );

  useEffect(() => {
    if (isError) {
      toast.error("유저 프로젝트를 가져올 수 없습니다.");
    }
  }, [isError]);

  if (isError) {
    return <Error message="오류 발생. 프로젝트를 가져올 수 없습니다. 다시 시도해주세요." />;
  }

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
              <S.AddProject onClick={onProjectAddClick}>+ 프로젝트 생성</S.AddProject>
            </I.ProjectTitle>
            <I.Grid>
              {isLoading && skeleton}
              {list?.map((value) => (
                <ProjectCard key={value.uuid} data={value} />
              ))}
              {isFetchingNextPage && skeleton}
            </I.Grid>
            {list?.length === 0 && (
              <Fragment>
                <I.Message>프로젝트가 존재하지 않습니다.</I.Message>
                <I.Margin>
                  <I.Add onClick={onProjectAddClick}>추가하기</I.Add>
                </I.Margin>
              </Fragment>
            )}
            {!isFetching && count !== undefined && isMore(LIMIT, page, count) && (
              <I.More onClick={onNextPage}>더 가져오기...</I.More>
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
