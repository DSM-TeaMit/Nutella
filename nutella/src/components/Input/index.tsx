import { FC } from "react";
import { Button } from "./styles";

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <Button {...props} />;
};

export default Input;
