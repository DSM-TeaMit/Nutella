import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 28px;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ProfileDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileDescription = styled.div`
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body3};
`;

export const Github = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body3};
  cursor: pointer;
  display: flex;
  column-gap: 8px;
  align-items: center;

  img {
    filter: ${({ theme }) => theme.filters.grayscale.gray2};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};

    img {
      filter: ${({ theme }) => theme.filters.grayscale.black};
    }
  }
`;
