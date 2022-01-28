import React, { FC, useCallback } from "react";
import * as S from "./styles";

interface PropsType {
  currentDate: Date;
  startDate: Date;
  endDate: Date;
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

const DateCell: FC<PropsType> = ({ currentDate, startDate, endDate }) => {
  const renderCell = useCallback(() => {
    let renderer = S.SelectedMiddle;

    if (compareDate(currentDate, startDate) === -1 || compareDate(currentDate, endDate) === 1) {
      //범위 밖
      renderer = S.Default;
    } else if (compareDate(currentDate, startDate) === 0) {
      //시작
      renderer = S.SelectedStart;
    } else if (compareDate(currentDate, endDate) === 0) {
      //종료
      renderer = S.SelectedEnd;
    }

    return React.createElement(renderer, {}, <S.DateLabel>{currentDate.getDate()}</S.DateLabel>);
  }, [currentDate, endDate, startDate]);

  return renderCell();
};

export default DateCell;
