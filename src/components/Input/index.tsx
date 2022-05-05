import { FC, memo } from "react";
import * as S from "./styles";

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div>
      <S.InputStyle {...props} />
      <S.Line />
    </div>
  );
};

export default memo(Input);
