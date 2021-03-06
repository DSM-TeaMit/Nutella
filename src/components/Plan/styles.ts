import styled from "@emotion/styled";
import { ReportStatus } from "../../interface";

export const Container = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 920px;
  margin: 0px auto;
  margin-top: 120px;
  margin-bottom: 200px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const ContentInner = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
  padding: 24px 0px;
  font: ${({ theme }) => theme.fonts.h1};
`;

export const RowContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.black};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const RowTitle = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) => theme.fonts.body1};
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  width: 20%;
  text-align: center;
`;

export const RowLineContent = styled.div`
  padding: 12px 16px;
  flex: 1;
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const CheckBoxContianer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const Time = styled(RowLineContent)`
  cursor: pointer;

  &:empty::before {
    content: attr(placeholder);
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const RowMutiLineContent = styled.div`
  padding: 16px;
  flex: 1;
  min-height: 150px;
`;

export const DayContianer = styled.div`
  margin-left: 80px;
  display: flex;
  column-gap: 60px;
  margin-right: 16px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const InfoContainer = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  display: flex;
  column-gap: 120px;
`;

export const Members = styled.div`
  flex: 1;
`;

export const MemberContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  flex: 1;
  display: flex;

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const MemberName = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale.black};
`;

export const MemberRoleContainer = styled.div`
  flex: 1;
  display: flex;
  column-gap: 16px;
  padding: 8px 16px;
`;

export const Role = styled.div`
  padding: 4px 6px;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.grayscale.white};
  font: ${({ theme }) => theme.fonts.body3};
  border-radius: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 16px;
  margin-top: 24px;
  width: 100%;
  justify-content: right;
  align-items: center;
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

export const Status = styled.div<{ status: ReportStatus }>`
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

export const OtherContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const OtherLabel = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const OtherLength = styled.div<{ length: number }>`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme, length }) =>
    length >= 15 ? theme.colors.red.default : theme.colors.grayscale.gray2};
`;
