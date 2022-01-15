import { NavLinkProps } from "react-router-dom";
import * as S from "./styles";

const Navigation = (props: NavLinkProps) => {
  return <S.Container {...props} />;
};

export default Navigation;
