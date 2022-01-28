import { StyledComponent } from "@emotion/styled";
import React, { FC, useCallback } from "react";
import * as S from "./styles";

interface PropsType {
  type: string;
}

const DateCell: FC<PropsType> = ({ type, children }) => {
  const renderCell = useCallback(() => {
    const rendererMap = new Map<string, StyledComponent<{}, {}, {}>>()
      .set("middle", S.SelectedMiddle)
      .set("selected", S.Selected)
      .set("default", S.Default)
      .set("start", S.SelectedStart)
      .set("end", S.SelectedEnd);

    const renderer = rendererMap.get(type)!;

    return React.createElement(renderer, {}, <S.DateLabel>{children}</S.DateLabel>);
  }, [children, type]);

  return renderCell();
};

export default DateCell;
