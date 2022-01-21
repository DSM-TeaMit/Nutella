import { keyframes } from "@emotion/css";
import styled from "@emotion/styled";

const SlideIn = keyframes`
  from{
    transform: translateX(200%);
    opacity: 0;
  }
  to{
    transform: translateX(0%);
    opacity: 1;
  }
`;

const FadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const Container = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.colors.grayscale.white};
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 400px;
  border-radius: 10px;
  pointer-events: all;
  animation: ${SlideIn} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1), ${FadeIn} 1.5s ease;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle1};
`;

export const Content = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
`;

export const PositiveContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.green.default};
`;

export const DenialContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.red.default};
`;
