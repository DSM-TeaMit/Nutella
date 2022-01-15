import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

interface ContainerProps {
  active: boolean;
}

export const Container = styled(NavLink)<ContainerProps>`
  width: 100%;
  border: 0;
  border-radius: 10px;
  outline: none;
  color: ${({ theme, active }) =>
    active ? theme.colors.grayscale.white : theme.colors.grayscale.gray1};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.default : theme.colors.grayscale.white};
  font: ${({ theme }) => theme.fonts.body2};
  text-decoration: none;
  padding: 12px 16px;
  display: flex;
  column-gap: 12px;

  &:hover {
    background-color: ${({ theme, active }) => !active && theme.colors.grayscale.lightGray1};
  }

  img {
    filter: ${({ theme, active }) =>
      active ? theme.filters.grayscale.white : theme.filters.grayscale.gray1};
  }
`;
