import * as S from "./styles";
import MainProjectCard from "../Cards/MainProjectCard";
import useTitle from "../../hooks/useTitle";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useSearch } from "../../queries/Search";
import { project } from "../../utils/api/Feed";
import toast from "react-hot-toast";
import MainProjectSkeleton from "../Cards/MainProjectSkeleton";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchWord = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const { data, isError, isLoading } = useSearch(searchWord);

  useTitle(`${searchWord}의 검색결과`);

  useEffect(() => {
    if (isError) {
      toast.error("오류가 발생했습니다. 다시 시도해 주세요");
    }
  }, [isError]);

  const skeletons = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((_, index) => <MainProjectSkeleton key={index} />),
    []
  );

  return (
    <S.Container>
      <S.SearchContent>
        <S.SearchTitle>{searchWord}(으)로 검색한 결과</S.SearchTitle>
        {data?.data.projectName.count === 0 &&
        data?.data.memberName.count === 0 ? (
          <>
            <S.BigMessage>:(</S.BigMessage>
            <S.BigMessage>
              {searchWord}(으)로 검색한 결과가 존재하지 않습니다.
            </S.BigMessage>
            <S.BigMessage>다른 키워드로 검색해 주세요.</S.BigMessage>
          </>
        ) : (
          <>
            <S.ElementBox>
              {isLoading ? null : (
                <S.Title>
                  프로젝트 <span>{data?.data.projectName.count}개</span>
                </S.Title>
              )}

              <S.ProjectBox>
                {isLoading
                  ? skeletons
                  : data?.data.projectName.projects.map((item: project) => {
                      return <MainProjectCard key={item.uuid} data={item} />;
                    })}
                {data?.data.projectName.count === 0 && (
                  <S.Message>검색된 프로젝트가 없습니다.</S.Message>
                )}
              </S.ProjectBox>
            </S.ElementBox>
            <S.ElementBox>
              {isLoading ? null : (
                <S.Title>
                  이름에 {searchWord}(을)를 포함한 유저가 참여한 프로젝트{" "}
                  <span>{data?.data.memberName.count}개</span>
                </S.Title>
              )}
              <S.ProjectBox>
                {isLoading
                  ? skeletons
                  : data?.data.memberName.projects.map((item: project) => {
                      return <MainProjectCard key={item.uuid} data={item} />;
                    })}

                {data?.data.memberName.count === 0 && (
                  <S.Message>유저가 참여한 프로젝트가 없습니다.</S.Message>
                )}
              </S.ProjectBox>
            </S.ElementBox>
          </>
        )}
      </S.SearchContent>
    </S.Container>
  );
};

export default Search;
