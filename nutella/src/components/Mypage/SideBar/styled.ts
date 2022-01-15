import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  padding: 20px 16px;
  min-height: 664px;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const ProfileImage = styled.img`
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Email = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;
