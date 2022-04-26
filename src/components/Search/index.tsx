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
  } = useSearchEach(searchWord, "projectName");

  const {
    data: memberData,
    isFetchingNextPage: memberIsFetchingNextPage,
    fetchNextPage: memberFetchNextPage,
    isFetching: memberIsFetching,
  } = useSearchEach(searchWord, "memberName");

  const projectPrevPage: number = useMemo(() => {
    if (
      !projectData ||
      projectData.pageParams.length <= 0 ||
      projectData.pageParams[projectData.pageParams.length - 1] === undefined
    ) {
      return initPage;
    }

    return Number(projectData.pageParams[projectData.pageParams.length - 1]);
  }, [projectData]);

  const memberPrevPage: number = useMemo(() => {
    if (
      !memberData ||
      memberData.pageParams.length <= 0 ||
      memberData.pageParams[memberData.pageParams.length - 1] === undefined
    ) {
      return initPage;
    }

    return Number(memberData.pageParams[memberData.pageParams.length - 1]);
  }, [memberData]);

  const [projectPage, setProjectPage] = useState<number>(projectPrevPage);
  const [memberPage, setMemberPage] = useState<number>(memberPrevPage);

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
        projectNameCount: undefined,
        memberNameCount: undefined,
      };
    }

    const plist: Project[] = [];
    const mlist: Project[] = [];
    let pCount = 0;
    let mCount = 0;

    data.pages
      .map((value) => value.data.projectName.projects)
      .forEach((value) => plist.push(...value));

    data.pages
      .map((value) => value.data.memberName.projects)
      .forEach((value) => mlist.push(...value));

    if (data && data.pages.length > 0) {
      pCount = data.pages[0].data.projectName.count;
      mCount = data.pages[0].data.memberName.count;
    }

    return {
      projectName: plist,
      memberName: mlist,
      projectNameCount: pCount,
      memberNameCount: mCount,
    };
  }, [data]);

  const projectNameList = useMemo(() => {
    if (!projectData) {
      return undefined;
    }

    const pList: Project[] = [];

    projectData.pages
      .map((value) => value.data.projectName.projects)
      .forEach((value) => pList.push(...value));

    return pList;
  }, [projectData]);

  const memberNameList = useMemo(() => {
    if (!memberData) {
      return undefined;
    }

    const mList: Project[] = [];

    memberData.pages
      .map((value) => value.data.memberName.projects)
      .forEach((value) => mList.push(...value));

    return mList;
  }, [memberData]);

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
        {firstSearchList.projectNameCount === 0 && firstSearchList.memberNameCount === 0 && (
          <>
            <S.BigMessage>:(</S.BigMessage>
            <S.BigMessage>{searchWord}(으)로 검색한 결과가 존재하지 않습니다.</S.BigMessage>
            <S.BigMessage>다른 키워드로 검색해 주세요.</S.BigMessage>
          </>
        )}
        {firstSearchList.projectNameCount !== 0 && (
          <S.ElementBox>
            <S.Title>
              프로젝트&nbsp;
              {firstSearchList.projectNameCount && (
                <span>{firstSearchList.projectNameCount}개</span>
              )}
            </S.Title>
            <S.ProjectBox>
              {isLoading && skeletons}
              {firstSearchList.projectName?.map((item: Project) => {
                return <MainProjectCard key={item.uuid} data={item} />;
              })}
              {projectNameList?.map((value) => (
                <MainProjectCard key={value.uuid} data={value} />
              ))}
              {projectIsFetchingNextPage && skeletons}
            </S.ProjectBox>
            {firstSearchList.projectNameCount &&
              !projectIsFetching &&
              isMore(LIMIT, projectPage, firstSearchList.projectNameCount) && (
                <S.More onClick={onProjectNext}>더 가져오기</S.More>
              )}
          </S.ElementBox>
        )}
        {firstSearchList.memberNameCount !== 0 && (
          <S.ElementBox>
            <S.Title>
              이름에 {searchWord}(을)를 포함한 유저가 참여한 프로젝트{" "}
              {!!firstSearchList.memberNameCount && (
                <span>{firstSearchList.memberNameCount}개</span>
              )}
            </S.Title>
            <S.ProjectBox>
              {isLoading && skeletons}
              {firstSearchList.memberName?.map((item: Project) => {
                return <MainProjectCard key={item.uuid} data={item} />;
              })}
              {memberNameList?.map((value) => (
                <MainProjectCard key={value.uuid} data={value} />
              ))}
              {memberIsFetchingNextPage && skeletons}
            </S.ProjectBox>
            {firstSearchList.memberNameCount &&
              !memberIsFetching &&
              isMore(LIMIT, memberPage, firstSearchList.memberNameCount) && (
                <S.More onClick={onMemberNext}>더 가져오기</S.More>
              )}
          </S.ElementBox>
        )}
      </S.SearchContent>
    </S.Container>
  );
};

export default Search;
