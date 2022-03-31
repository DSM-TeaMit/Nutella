import styled from "@emotion/styled";

export const Background = styled.div<{ height: number }>`
  width: 414px;
  height: ${(props) => props.height}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;
