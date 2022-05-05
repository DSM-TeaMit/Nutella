import { FC, memo } from "react";
import { Button } from "./styles";

const BlueButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Button {...props} />;
};

export default memo(BlueButton);
