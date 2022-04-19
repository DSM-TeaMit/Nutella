import styled from "@emotion/styled";

export const Container = styled.div`
  user-select: none;
  width: 100%;
  min-width: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  text-decoration: none;
`;

export const Image = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

export const TitleContaienr = styled.div`
  min-width: 0;
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const TypeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Description = styled.span`
  color: transparent;
  font: ${({ theme }) => theme.fonts.body3};
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const BottonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const UserImage = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const UserImageOuter = styled.div`
  width: 12px;
  height: 24px;
`;

export const UserImageContainer = styled.div`
  display: flex;
`;

export const UserAdditional = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const Type = styled.span`
  color: transparent;
  font: ${({ theme }) => theme.fonts.body3};
`;

export const TypeAdditional = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;
