import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import * as S from "./styles";

const SearchInput = () => {
  const [inputProps, [value, setValue]] = useInput("");
  const navigate = useNavigate();

  const onKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const v = value.toString().trim();

      if (e.key === "Enter" && v.toString().length > 0) {
        navigate(`/search?q=${v}`);
        setValue("");
      }
    },
    [navigate, setValue, value]
  );

  return (
    <S.Input
      onKeyDown={onKeydown}
      {...inputProps}
      placeholder="검색어를 입력해주세요... (ex 유저 이름, 프로젝트 이름"
    />
  );
};

export default SearchInput;
