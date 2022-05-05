import * as I from "../../styles";
import ProjectCard from "../../../Cards/ProjectCard";
import { useParams } from "react-router-dom";
import { useUserProjects } from "../../../../queries/User";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Error from "../../Error";
import isMore from "../../../../constant/IsMore";
import LIMIT from "../../../../constant/Limit";
import ProjectSkeleton from "../../../Cards/ProjectSkeleton";
import usePagination from "../../../../hooks/usePagination";

const Project = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const initPage = 1;
  const { data, isError, isLoading, isFetching, fetchNextPage, isFetchingNextPage } = useUserProjects(
    uuid || "",
    initPage
  );
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

  useEffect(() => {
    if (isError) {
      toast.error("프로젝트를 가져올 수 없습니다.");
    }
  }, [isError]);

  const skeleton = useMemo(
    () =>
      Array(3)
        .fill(0)
        .map((_, index) => <ProjectSkeleton key={index} />),
    []
  );

  if (isError) {
    return <Error message="오류 발생. 유저 프로젝트를 가져올 수 없습니다. 다시 시도해주세요." />;
  }

  return (
    <I.ContentInner>
      <I.FlexContainer>
        <div>
          <I.ProjectTitle>
            <div>
              <I.H3>프로젝트&nbsp;</I.H3>
              <I.BlueH3>{count}</I.BlueH3>
            </div>
          </I.ProjectTitle>
          <I.Grid>
            {isLoading && skeleton}
            {list?.map((value) => (
              <ProjectCard key={value.uuid} data={value} />
            ))}
            {isFetchingNextPage && skeleton}
          </I.Grid>
          {!isFetching && count !== undefined && isMore(LIMIT, page, count) && (
            <I.More onClick={onNextPage}>더 가져오기...</I.More>
          )}
          {count === 0 && <I.Message>프로젝트가 존재하지 않습니다.</I.Message>}
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Project;
