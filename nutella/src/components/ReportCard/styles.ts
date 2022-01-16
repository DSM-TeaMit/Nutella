import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  display: flex;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 180px;
  object-fit: cover;
  object-position: center;
`;

export const InfoContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const TitleContaienr = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;
