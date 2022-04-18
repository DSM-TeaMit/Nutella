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
import Loading from "../../Loading";
import Error from "../../Error";
import LIMIT from "../../../../constant/Limit";
import { ProjectType } from "../../../../utils/api/User";

const Project = () => {
  const modalRef = useModalRef();
  const initPage = 1;
  const [page, setPage] = useState<number>(initPage);
  const { data, isError, isLoading, isFetching, fetchNextPage } =
    useMyProjects(initPage);
  const list = useMemo(() => {
    if (!data) {
      return undefined;
    }

    const l: ProjectType[] = [];

    data.pages.forEach((value) => {
      l.push(...value.data.projects);
    });

    return l;
  }, [data]);

  const count = useMemo(() => {
    if (!data || data.pages.length <= 0) {
      return undefined;
    }

    return data.pages[0].data.count;
  }, [data]);

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
              {list?.map((value) => (
                <ProjectCard key={value.uuid} data={value} />
              ))}
            </I.Grid>
            {list?.length === 0 && (
              <Fragment>
                <I.Message>프로젝트가 존재하지 않습니다.</I.Message>
                <I.Margin>
                  <I.Add onClick={onProjectAddClick}>추가하기</I.Add>
                </I.Margin>
              </Fragment>
            )}
            {!isFetching && count && isMore(LIMIT, page, count) && (
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
