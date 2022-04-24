import * as S from "./styles";
import MainProjectCard from "../Cards/MainProjectCard";
import useTitle from "../../hooks/useTitle";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchWord = useMemo(() => searchParams.get("q") || "", [searchParams]);

  useTitle(`${searchWord}의 검색결과`);

  return (
    <S.Container>
      <S.SearchContent>
        <S.SearchTitle>{searchWord}(으)로 검색한 결과</S.SearchTitle>
        <S.ElementBox>
          <S.Title>
            프로젝트 <span>12개</span>
          </S.Title>
          <S.ProjectBox>{/* <Project /> */}</S.ProjectBox>
        </S.ElementBox>
        <S.ElementBox>
          <S.Title>
            이름에 Tea(을)를 포함한 유저가 참여한 프로젝트 <span>12개</span>
          </S.Title>
          <S.ProjectBox>{/* <Project /> */}</S.ProjectBox>
        </S.ElementBox>
      </S.SearchContent>
    </S.Container>
  );
};

export default Search;
