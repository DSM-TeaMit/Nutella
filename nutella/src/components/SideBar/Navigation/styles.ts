import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
  width: 100%;
  border: 0;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  font: ${({ theme }) => theme.fonts.body2};
  text-decoration: none;
  padding: 12px 16px;
  display: flex;
  column-gap: 12px;

  img {
    filter: ${({ theme }) => theme.filters.grayscale.gray1};
    user-select: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }

  &.active {
    color: ${({ theme }) => theme.colors.grayscale.white};
    background-color: ${({ theme }) => theme.colors.primary.default};

    img {
      filter: ${({ theme }) => theme.filters.grayscale.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.default};
    }
  }
`;
