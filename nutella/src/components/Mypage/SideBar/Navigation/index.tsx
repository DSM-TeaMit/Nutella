import { css } from "@emotion/css";
import { Theme, ThemeContext } from "@emotion/react";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLinkProps } from "react-router-dom";
import * as S from "./styles";

const Navigation = (props: NavLinkProps) => {
  return <S.Container className={({ isActive }) => (isActive ? "active" : "")} {...props} />;
};

export default Navigation;
