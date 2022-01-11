import { FC } from "react";
import { InputStyle } from "./styles";

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <InputStyle {...props} />;
};

export default Input;
