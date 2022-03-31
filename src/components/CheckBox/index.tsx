import React, { FC, useCallback } from "react";
import * as S from "./styles";
import { CheckIcons } from "../../assets/icons";

export type CheckBoxMouseEvent = React.MouseEvent<HTMLButtonElement> & {
  name?: string;
};
interface PropsType {
  name?: string;
  onClick?: (e: CheckBoxMouseEvent) => void;
  isActive: boolean;
}

const CheckBox: FC<PropsType> = ({ children, name, onClick, isActive }) => {
  const onClickHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const params = { ...e, name };
      onClick && onClick(params);
    },
    [name, onClick]
  );

  return (
    <S.Contianer onClick={onClickHandler}>
      <S.Box isActive={isActive}>
        {isActive && <img alt="check" src={CheckIcons} />}
      </S.Box>
      <S.Label>{children}</S.Label>
    </S.Contianer>
  );
};

export default CheckBox;
