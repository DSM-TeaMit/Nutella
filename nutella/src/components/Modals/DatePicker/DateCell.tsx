import { FC } from "react";
import * as S from "./styles";

interface PropsType {
  currentDate: Date;
  startDate: Date;
  endDate: Date;
}

const DateCell: FC<PropsType> = ({ currentDate }) => {
  return (
    <S.SelectedEnd>
      <S.DateLabel>{currentDate.getDate()}</S.DateLabel>
    </S.SelectedEnd>
  );
};

export default DateCell;
