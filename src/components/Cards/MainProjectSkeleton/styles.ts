import styled from "@emotion/styled";

export const Content = styled.div`
  width: 100%;
  border-radius: 10px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  text-decoration: none;
  user-select: none;
`;

export const ProjectPhoto = styled.div`
  aspect-ratio: 4 / 3;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  width: 100%;
`;

export const ProjectBottom = styled.div`
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  padding: 10px 16px;
`;

export const InfoContainer = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  img {
    vertical-align: bottom;
  }
`;

export const ProjectInfo = styled(InfoContainer)`
  margin-bottom: 0px;
`;

export const ProjectTitle = styled.span`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: transparent;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const Field = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: transparent;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const Number = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: transparent;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const Icon = styled.span`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;
