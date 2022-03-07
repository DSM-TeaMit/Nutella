import { StyledComponent } from "@emotion/styled";
import React, { FC, useCallback } from "react";
import * as S from "./styles";

export type DateCellType =
  | "middle"
  | "selected"
  | "disabled"
  | "default"
  | "start"
  | "end";

interface PropsType {
  type: DateCellType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DateCell: FC<PropsType> = ({ type, children, onClick }) => {
  const renderCell = useCallback(() => {
    const rendererMap = new Map<
      DateCellType,
      StyledComponent<
        React.ClassAttributes<HTMLButtonElement> &
          React.HTMLAttributes<HTMLButtonElement>,
        {},
        {}
      >
    >()
      .set("middle", S.SelectedMiddle)
      .set("selected", S.Selected)
      .set("disabled", S.Disable)
      .set("default", S.Default)
      .set("start", S.SelectedStart)
      .set("end", S.SelectedEnd);

    const renderer = rendererMap.get(type)!;

    return React.createElement(
      renderer,
      { onClick },
      <S.DateLabel>{children}</S.DateLabel>
    );
  }, [children, onClick, type]);

  return renderCell();
};

export default DateCell;
