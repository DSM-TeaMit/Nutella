import * as S from "./styles";
import MainProjectCard from "../Cards/MainProjectCard";
import useTitle from "../../hooks/useTitle";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useSearch } from "../../queries/Search";
import { project } from "../../utils/api/Feed";
import toast from "react-hot-toast";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchWord = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const { data, isError } = useSearch(searchWord);

  useTitle(`${searchWord}의 검색결과`);

  useEffect(() => {
    if (isError) {
      toast.error("가져온 프로젝트가 없습니다.");
    }
  }, [isError]);

  return (
    <S.Container>
      <S.SearchContent>
        <S.SearchTitle>{searchWord}(으)로 검색한 결과</S.SearchTitle>
        <S.ElementBox>
          <S.Title>
            프로젝트 <span>{data?.data.projectName.count}개</span>
          </S.Title>
          <S.ProjectBox>
            {data?.data.projectName.projects.map((item: project) => {
              return <Project key={item.uuid} data={item} />;
            })}
            {data?.data.projectName.count === 0 && (
              <S.Message>검색된 프로젝트가 없습니다.</S.Message>
            )}
          </S.ProjectBox>
        </S.ElementBox>
        <S.ElementBox>
          <S.Title>
            이름에 {searchWord}(을)를 포함한 유저가 참여한 프로젝트{" "}
            <span>{data?.data.memberName.count}개</span>
          </S.Title>
          <S.ProjectBox>
            {data?.data.memberName.projects.map((item: project) => {
              <Project key={item.uuid} data={item} />;
            })}
            {data?.data.memberName.count === 0 && (
              <S.Message>유저가 참여한 프로젝트가 없습니다.</S.Message>
            )}
          </S.ProjectBox>
        </S.ElementBox>
      </S.SearchContent>
    </S.Container>
  );
};

export default Search;
