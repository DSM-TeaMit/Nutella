import * as S from "./styles";
import { FC } from "react";

interface PropsType {
  height: number;
}

const LoginBackground: FC<PropsType> = ({ height }) => {
  return <S.Background height={height} />;
};

export default LoginBackground;
