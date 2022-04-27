import * as S from "./styles";
import MainProjectCard from "../Cards/MainProjectCard";
import useTitle from "../../hooks/useTitle";
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearch, useSearchEach } from "../../queries/Search";
import { Project } from "../../utils/api/Feed";
import toast from "react-hot-toast";
import MainProjectSkeleton from "../Cards/MainProjectSkeleton";
import isMore from "../../constant/IsMore";
import LIMIT from "../../constant/Limit";
import usePagination from "../../hooks/usePagination";

const Search = () => {
  const initPage = 1;
  const [searchParams] = useSearchParams();
  const searchWord = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const { data, isError, isLoading } = useSearch(searchWord, initPage);
  const {
    data: projectData,
    isFetchingNextPage: projectIsFetchingNextPage,
    fetchNextPage: projectFetchNextPage,
    isFetching: projectIsFetching,
  } = useSearchEach(searchWord, "projectName", initPage);

  const {
    data: memberData,
    isFetchingNextPage: memberIsFetchingNextPage,
    fetchNextPage: memberFetchNextPage,
    isFetching: memberIsFetching,
  } = useSearchEach(searchWord, "memberName", initPage);
  const { list: pList, prevPage: pPrev } = usePagination(projectData, initPage);
  const { list: mList, prevPage: mPrev } = usePagination(memberData, initPage);

  const counts = useMemo(() => {
    if (!data || data.pages.length <= 0) {
      return undefined;
    }

    const pCount = data.pages[data.pages.length - 1].data.projectName.count;
    const mCount = data.pages[data.pages.length - 1].data.memberName.count;

    return { pCount, mCount };
  }, [data]);

  const [projectPage, setProjectPage] = useState<number>(pPrev);
  const [memberPage, setMemberPage] = useState<number>(mPrev);

  useTitle(`${searchWord}의 검색결과`);

  useEffect(() => {
    if (isError) {
      toast.error("오류가 발생했습니다. 다시 시도해 주세요");
    }
  }, [isError]);

  const firstSearchList = useMemo(() => {
    if (!data) {
      return {
        projectName: undefined,
        memberName: undefined,
      };
    }

    const plist: Project[] = [];
    const mlist: Project[] = [];

    data.pages
      .map((value) => value.data.projectName.projects)
      .forEach((value) => plist.push(...value));

    data.pages
      .map((value) => value.data.memberName.projects)
      .forEach((value) => mlist.push(...value));

    return {
      projectName: plist,
      memberName: mlist,
    };
  }, [data]);

  const skeletons = Array<number>(5)
    .fill(0)
    .map((_, index) => {
      return <MainProjectSkeleton key={index} />;
    });

  const onProjectNext = useCallback(() => {
    setProjectPage((prev) => prev + 1);
    projectFetchNextPage();
  }, [projectFetchNextPage]);

  const onMemberNext = useCallback(() => {
    setMemberPage((prev) => prev + 1);
    memberFetchNextPage();
  }, [memberFetchNextPage]);

  return (
    <S.Container>
      <S.SearchContent>
        <S.SearchTitle>{searchWord}(으)로 검색한 결과</S.SearchTitle>
        {counts?.pCount === 0 && counts?.mCount === 0 && (
          <>
            <S.BigMessage>:(</S.BigMessage>
            <S.BigMessage>{searchWord}(으)로 검색한 결과가 존재하지 않습니다.</S.BigMessage>
            <S.BigMessage>다른 키워드로 검색해 주세요.</S.BigMessage>
          </>
        )}
        {counts?.pCount !== 0 && (
          <S.ElementBox>
            <S.Title>
              프로젝트&nbsp;
              {counts && <span>{counts.pCount}개</span>}
            </S.Title>
            <S.ProjectBox>
              {isLoading && skeletons}
              {firstSearchList.projectName?.map((item: Project) => {
                return <MainProjectCard key={item.uuid} data={item} />;
              })}
              {pList?.map((value) => (
                <MainProjectCard key={value.uuid} data={value} />
              ))}
              {projectIsFetchingNextPage && skeletons}
            </S.ProjectBox>
            {counts && !projectIsFetching && isMore(LIMIT, projectPage, counts.pCount) && (
              <S.More onClick={onProjectNext}>더 가져오기</S.More>
            )}
          </S.ElementBox>
        )}
        {counts?.mCount !== 0 && (
          <S.ElementBox>
            <S.Title>
              이름에 {searchWord}(을)를 포함한 유저가 참여한 프로젝트{" "}
              {!!counts && <span>{counts.mCount}개</span>}
            </S.Title>
            <S.ProjectBox>
              {isLoading && skeletons}
              {firstSearchList.memberName?.map((item: Project) => {
                return <MainProjectCard key={item.uuid} data={item} />;
              })}
              {mList?.map((value) => (
                <MainProjectCard key={value.uuid} data={value} />
              ))}
              {memberIsFetchingNextPage && skeletons}
            </S.ProjectBox>
            {counts && !memberIsFetching && isMore(LIMIT, memberPage, counts?.mCount) && (
              <S.More onClick={onMemberNext}>더 가져오기</S.More>
            )}
          </S.ElementBox>
        )}
      </S.SearchContent>
    </S.Container>
  );
};

export default Search;
