import { FC } from "react";
import { Button } from "./styles";

const RedButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Button {...props} />;
};

export default RedButton;
