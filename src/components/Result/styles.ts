import styled from "@emotion/styled";
import { PlanStatus } from "../../interface";

export const Container = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 920px;
  margin: 0px auto;
  margin-top: 120px;
  margin-bottom: 200px;
`;

export const PDFContainer = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 100%;
  margin: 0px auto;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  aspect-ratio: 1 / 1.414;
  position: relative;

  &:hover {
    .delete {
      opacity: 1;
    }
  }
`;

export const Delete = styled.button`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.red.default};
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: none;
  position: absolute;
  top: 0%;
  left: calc(100% + 16px);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.red.hover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.red.click};
  }
`;

export const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
`;

export const CoverInner = styled.div`
  padding: 72px 36px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoverBig = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
`;

export const Topic = styled.input`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  width: 100%;
  padding: 34px 0px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 150px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const CoverInfoContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  font: ${({ theme }) => theme.fonts.subtitle1};
`;

export const CoverInfoRow = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  display: flex;

  :last-of-type {
    border: 0px;
  }
`;

export const CoverInfoTitle = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  width: 20%;
  padding: 22px 0px;
  text-align: center;
`;

export const CoverInfoContent = styled.div`
  padding: 22px 0px;
  text-align: center;
  flex: 1;
`;

export const ContentPadding = styled.div`
  padding: 40px 36px;
`;

export const ExampleDiv = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
`;

export const AddButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  text-align: center;
  font: ${({ theme }) => theme.fonts.h1};
  cursor: pointer;
  width: 100%;
  padding: 11px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  column-gap: 16px;
  justify-content: right;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Message = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  padding: 16px 0px;
  text-align: center;
`;

export const Margin = styled.div`
  height: 80vh;
  padding-top: 120px;
`;

export const Status = styled.div<{ status: PlanStatus }>`
  font: ${({ theme }) => theme.fonts.body2};
  align-self: center;
  color: ${({ status, theme }) => {
    if (status === "ACCEPTED") {
      return theme.colors.green.default;
    }
    if (status === "REJECTED") {
      return theme.colors.red.default;
    }

    return theme.colors.grayscale.gray2;
  }};
`;
