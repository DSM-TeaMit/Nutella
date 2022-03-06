import * as S from "./styles";
import Project from "../Project/Project";

const Search = () => {
  return (
    <S.Container>
      <S.SearchContent>
        <S.SearchTitle>Tea(으)로 검색한 결과</S.SearchTitle>
        <S.ElementBox>
          <S.Title>
            프로젝트 <span>12개</span>
          </S.Title>
          <S.ProjectBox>
            {new Array(12).fill(0).map(() => (
              <Project />
            ))}
          </S.ProjectBox>
        </S.ElementBox>
        <S.ElementBox>
          <S.Title>
            이름에 Tea(을)를 포함한 유저가 참여한 프로젝트 <span>12개</span>
          </S.Title>
          <S.ProjectBox>
            {new Array(8).fill(0).map(() => (
              <Project />
            ))}
          </S.ProjectBox>
        </S.ElementBox>
      </S.SearchContent>
    </S.Container>
  );
};

export default Search;
