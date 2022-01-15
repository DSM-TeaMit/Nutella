import { useState } from "react";
import { NavLinkProps } from "react-router-dom";
import * as S from "./styles";

const Navigation = (props: NavLinkProps) => {
  const [active, setActive] = useState(false);

  return (
    <S.Container
      {...{ active }}
      style={({ isActive }) => {
        setActive(isActive);
        return {};
      }}
      {...props}
    />
  );
};

export default Navigation;
