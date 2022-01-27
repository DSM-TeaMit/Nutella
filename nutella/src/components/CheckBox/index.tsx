import { FC } from "react";
import * as S from "./styles";
import { CheckIcons } from "../../assets/icons";

interface PropsType {
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isActive: boolean;
}

const CheckBox: FC<PropsType> = ({ children, id, onClick, isActive }) => {
  return (
    <S.Contianer id={id} onClick={onClick}>
      <S.Box isActive={isActive}>{isActive && <img alt="check" src={CheckIcons} />}</S.Box>
      <S.Label>{children}</S.Label>
    </S.Contianer>
  );
};

export default CheckBox;
