import useInput from "../../../hooks/useInput";
import * as S from "./styles";

const SearchInput = () => {
  const [inputProps] = useInput("", true);

  return (
    <S.Input {...inputProps} placeholder="검색어를 입력해주세요... (ex 유저 이름, 프로젝트 이름" />
  );
};

export default SearchInput;
