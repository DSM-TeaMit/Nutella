import { Theme, ThemeContext } from "@emotion/react";
import { FC, useCallback, useContext, useState } from "react";
import DateCell, { DateCellType } from "./DateCell";
import * as S from "./styles";
import { ArrowIcons } from "../../../assets/icons";

export interface DateState {
  start: Date | undefined;
  end: Date | undefined;
}

type DateName = keyof DateState;

interface PropsType {
  dates: DateState;
  setDates: (dates: DateState) => void;
}

const compareDate = (d1: Date, d2: Date) => {
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  if (d1.getTime() === d2.getTime()) {
    return 0;
  } else if (d1.getTime() > d2.getTime()) {
    return 1;
  } else return -1;
};

const getCellType = (
  dates: DateState | null,
  currentDate: Date,
  calendarDate: Date
): DateCellType => {
  if (!dates) {
    if (
      currentDate.getFullYear() !== calendarDate.getFullYear() ||
      currentDate.getMonth() !== calendarDate.getMonth()
    ) {
      return "disabled";
    }

    return "default";
  }

  const { start: startDate, end: endDate } = dates;

  if (!startDate || !endDate) {
    return "default";
  }

  if (
    compareDate(startDate, endDate) === 0 &&
    compareDate(currentDate, startDate) === 0
  ) {
    return "selected";
  }

  if (compareDate(currentDate, startDate) === 0) {
    //시작
    return "start";
  }

  if (compareDate(currentDate, endDate) === 0) {
    //종료
    return "end";
  }

  if (
    compareDate(currentDate, startDate) === 1 &&
    compareDate(currentDate, endDate) === -1
  ) {
    return "middle";
  }

  if (
    currentDate.getFullYear() !== calendarDate.getFullYear() ||
    currentDate.getMonth() !== calendarDate.getMonth()
  ) {
    return "disabled";
  }

  return "default";
};

const dateToYearMonth = (date: Date) =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

export const DatePicker: FC<PropsType> = ({ dates, setDates }) => {
  const initCalendarDate = () => {
    let d = new Date();
    if (dates && dates.start) {
      d = new Date(dates.start);
    }
    d.setDate(1);
    d.setHours(0, 0, 0, 0);

    return d;
  };

  const themeContext = useContext(ThemeContext) as Theme;
  const [displayDates, setDisplayDates] = useState<DateState>(dates);
  const [calendarDate, setCalendarDate] = useState<Date>(initCalendarDate()); //표시되는 달력의 year, month를 가지는 date
  const [selectedType, setSelectedType] = useState<DateName>("start"); //선택된, 날짜 클릭시 바뀔 날짜 이름

  const setDatesState = useCallback(
    (dates: DateState) => {
      setDisplayDates(dates);
      setDates(dates);
    },
    [setDates]
  );

  const dateToString = (placeholder: string, date?: Date): string =>
    date
      ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
      : placeholder;

  const onTypeClick = (type: DateName) => () => setSelectedType(type);

  const onMonthChange = (offset: number) => () => {
    const date = new Date(calendarDate);
    date.setMonth(date.getMonth() + offset);

    setCalendarDate(date);
  };

  const onClick = useCallback(
    (date: Date) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();

      if (!displayDates) {
        setDatesState({ start: date, end: date });
        setSelectedType("end");
        return;
      }

      const selectedDate = displayDates[selectedType];
      let type = selectedType;

      if (!selectedDate || !displayDates.start || !displayDates.end) {
        return;
      }

      if (compareDate(date, selectedDate) === 0) {
        return;
      }

      if (
        selectedType === "start" &&
        compareDate(date, displayDates.end) === 1
      ) {
        type = "end";
      } else if (
        selectedType === "end" &&
        compareDate(date, displayDates.start) === -1
      ) {
        type = "start";
      }

      setDatesState({ ...displayDates, [type]: date });
      setSelectedType(type);
    },
    [displayDates, selectedType, setDatesState]
  );

  const renderDates = useCallback(() => {
    const offset = new Date(calendarDate);
    offset.setDate(1);
    offset.setDate(offset.getDate() - offset.getDay() - 1);

    return new Array(6).fill(0).map(() => {
      return new Array(7).fill(0).map(() => {
        offset.setDate(offset.getDate() + 1);
        const date = new Date(offset);
        const type = getCellType(displayDates, date, calendarDate);

        return (
          <DateCell onClick={onClick(date)} type={type} key={date.getTime()}>
            {date.getDate()}
          </DateCell>
        );
      });
    });
  }, [calendarDate, displayDates, onClick]);

  return (
    <S.Container>
      <S.Title>날짜를 선택해주세요</S.Title>
      <S.Date>
        <S.DateSpan
          isActive={selectedType === "start"}
          onClick={onTypeClick("start")}
        >
          {dateToString("시작", displayDates?.start)}
        </S.DateSpan>
        <span>&nbsp;~&nbsp;</span>
        <S.DateSpan
          isActive={selectedType === "end"}
          onClick={onTypeClick("end")}
        >
          {dateToString("종료", displayDates?.end)}
        </S.DateSpan>
      </S.Date>
      <S.DateContainer>
        <S.DateTitle>
          <S.MonthButton onClick={onMonthChange(-1)}>
            <S.Arrow angle={90} alt="decrease month" src={ArrowIcons} />
          </S.MonthButton>
          <span>{dateToYearMonth(calendarDate)}</span>
          <S.MonthButton onClick={onMonthChange(1)}>
            <S.Arrow angle={-90} alt="increase month" src={ArrowIcons} />
          </S.MonthButton>
        </S.DateTitle>
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
