import styled from "@emotion/styled";
import { colors } from "../../utils/theme/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  margin-top: 130px;
  margin-bottom: 200px;
`;

export const FeedContent = styled.div`
  width: 1280px;
  margin: 0px auto;
`;

export const TitleBox = styled.div`
  display: flex;
`;

export const Title = styled.div<{ click: boolean }>`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${(props) =>
    props.click ? colors.grayscale.black : colors.grayscale.gray1};
  margin-right: 24px;
  cursor: pointer;
  display: flex;
`;

export const ElementBox = styled.div`
  margin: 48px 0px 96px 0px;
`;
