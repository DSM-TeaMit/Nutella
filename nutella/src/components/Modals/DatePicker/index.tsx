import { Theme, ThemeContext } from "@emotion/react";
import { useCallback, useContext, useMemo, useState } from "react";
import DateCell from "./DateCell";
import * as S from "./styles";

export const DatePicker = () => {
  const themeContext = useContext(ThemeContext) as Theme;
  const [startDate] = useState<Date>(new Date("2022-01-10"));
  const [endDate] = useState<Date>(new Date("2022-01-19"));

  const renderDates = useCallback(() => {
    const offset = new Date(startDate);
    offset.setDate(1);
    offset.setDate(offset.getDate() - offset.getDay() - 1);

    return new Array(6).fill(0).map(() => {
      return new Array(7).fill(0).map(() => {
        offset.setDate(offset.getDate() + 1);
        const date = new Date(offset);

        return (
          <DateCell
            key={date.getTime()}
            currentDate={date}
            startDate={startDate}
            endDate={endDate}
          />
        );
      });
    });
  }, [startDate]);

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
        <S.DateGrid>{renderDates()}</S.DateGrid>
      </S.DateContainer>
    </S.Container>
  );
};

export default DatePicker;
