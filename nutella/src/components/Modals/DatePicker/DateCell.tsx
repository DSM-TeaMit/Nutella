import { StyledComponent } from "@emotion/styled";
import React, { ComponentProps, FC, useCallback } from "react";
import * as S from "./styles";

interface PropsType {
  type: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const DateCell: FC<PropsType> = ({ type, children, onClick }) => {
  const renderCell = useCallback(() => {
    const rendererMap = new Map<
      string,
      StyledComponent<
        React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>,
        {},
        {}
      >
    >()
      .set("middle", S.SelectedMiddle)
      .set("selected", S.Selected)
      .set("disable", S.Disable)
      .set("default", S.Default)
      .set("start", S.SelectedStart)
      .set("end", S.SelectedEnd);

    const renderer = rendererMap.get(type)!;

    return React.createElement(renderer, { onClick }, <S.DateLabel>{children}</S.DateLabel>);
  }, [children, onClick, type]);

  return renderCell();
};

export default DateCell;
