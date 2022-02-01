import { Theme, ThemeContext } from "@emotion/react";
import { FC, useCallback, useContext, useState } from "react";
import State from "../../../interface/State";
import DateCell from "./DateCell";
import * as S from "./styles";

const compareDate = (d1: Date, d2: Date) => {
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  if (d1.getTime() === d2.getTime()) {
    return 0;
  } else if (d1.getTime() > d2.getTime()) {
    return 1;
  } else return -1;
};

const getCellType = (dates: DateState | null, currentDate: Date, calendarDate: Date): string => {
  if (!dates) {
    return "default";
  }

  const { start: startDate, end: endDate } = dates;

  let type = "middle";
  if (compareDate(startDate, endDate) === 0 && compareDate(currentDate, startDate) === 0) {
    type = "selected";
  } else if (
    currentDate.getFullYear() !== calendarDate.getFullYear() ||
    currentDate.getMonth() !== calendarDate.getMonth()
  ) {
    type = "disable";
  } else if (
    compareDate(currentDate, startDate) === -1 ||
    compareDate(currentDate, endDate) === 1
  ) {
    //범위 밖
    type = "default";
  } else if (compareDate(currentDate, startDate) === 0) {
    //시작
    type = "start";
  } else if (compareDate(currentDate, endDate) === 0) {
    //종료
    type = "end";
  }

  return type;
};

export interface DateState {
  start: Date;
  end: Date;
}

type DateName = keyof DateState;

interface PropsType {
  datesState: State<DateState | null>;
}

export const DatePicker: FC<PropsType> = ({ datesState }) => {
  const themeContext = useContext(ThemeContext) as Theme;
  const [, setDates] = datesState;
  const [dates, setDisplayDates] = useState<DateState | null>(datesState[0]);
  const [calendarDate] = useState<Date>(new Date("2022-01-01")); //표시되는 달력의 year, month를 가지는 date
  const [selectedType, setSelectedType] = useState<DateName>("start"); //선택된, 날짜 클릭시 바뀔 날짜 이름

  const setDatesState = useCallback(
    (dates: DateState | null) => {
      setDisplayDates(dates);
      setDates(dates);
    },
    [setDates]
  );

  const dateToString = (placeholder: string, date?: Date): string =>
    date ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일` : placeholder;

  const onTypeClick = (type: DateName) => () => setSelectedType(type);

  const onClick = useCallback(
    (date: Date, dateType: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      e.preventDefault();

      if (dateType === "disable") {
        return;
      }

      if (!dates) {
        setDatesState({ start: date, end: date });
        setSelectedType("end");
        return;
      }

      const selectedDate = dates[selectedType];
      let type = selectedType;

      if (compareDate(date, selectedDate) === 0) {
        return;
      }

      if (selectedType === "start" && compareDate(date, dates.end) === 1) {
        type = "end";
      } else if (selectedType === "end" && compareDate(date, dates.start) === -1) {
        type = "start";
      }

      setDatesState({ ...dates, [type]: date });
      setSelectedType(type);
    },
    [dates, selectedType, setDatesState]
  );

  const renderDates = useCallback(() => {
    const offset = new Date(calendarDate);
    offset.setDate(1);
    offset.setDate(offset.getDate() - offset.getDay() - 1);

    return new Array(6).fill(0).map(() => {
      return new Array(7).fill(0).map(() => {
        offset.setDate(offset.getDate() + 1);
        const date = new Date(offset);
        const type = getCellType(dates, date, calendarDate);

        return (
          <DateCell onClick={onClick(date, type)} type={type} key={date.getTime()}>
            {date.getDate()}
          </DateCell>
        );
      });
    });
  }, [calendarDate, dates, onClick]);

  return (
    <S.Container>
      <S.Title>날짜를 선택해주세요</S.Title>
      <S.Date>
        <S.DateSpan isActive={selectedType === "start"} onClick={onTypeClick("start")}>
          {dateToString("시작", dates?.start)}
        </S.DateSpan>{" "}
        ~{" "}
        <S.DateSpan isActive={selectedType === "end"} onClick={onTypeClick("end")}>
          {dateToString("종료", dates?.end)}
        </S.DateSpan>
      </S.Date>
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
