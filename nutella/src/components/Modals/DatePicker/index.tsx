import { Theme, ThemeContext } from "@emotion/react";
import { useContext } from "react";
import * as S from "./styles";

export const DatePicker = () => {
  const themeContext = useContext(ThemeContext) as Theme;

  return (
    <S.Container>
      <S.Title>날짜를 선택해주세요</S.Title>
      <S.Date>시작 ~ 종료</S.Date>
      <S.DateContainer>
        <S.DateTitle>2022년 1월</S.DateTitle>
        <S.DOWContainer>
          <S.DOWCell color={themeContext.colors.red.default}>일</S.DOWCell>
          <S.DOWCell color={themeContext.colors.grayscale.black}>월</S.DOWCell>
          <S.DOWCell color={themeContext.colors.grayscale.black}>화</S.DOWCell>
          <S.DOWCell color={themeContext.colors.grayscale.black}>수</S.DOWCell>
          <S.DOWCell color={themeContext.colors.grayscale.black}>목</S.DOWCell>
          <S.DOWCell color={themeContext.colors.grayscale.black}>금</S.DOWCell>
          <S.DOWCell color={themeContext.colors.primary.default}>토</S.DOWCell>
        </S.DOWContainer>
      </S.DateContainer>
    </S.Container>
  );
};

export default DatePicker;
