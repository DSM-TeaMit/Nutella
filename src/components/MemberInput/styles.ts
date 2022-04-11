import styled from "@emotion/styled";

export const InputStyle = styled.input`
  border: 0;
  outline: none;
  background-color: transparent;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  padding: 0;
  margin-bottom: 4px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const UserContainer = styled.div`
  padding: 16px 12px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  position: absolute;
  top: calc(100% - 1px);
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  max-height: 230px;
  min-height: 0px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin-bottom: 12px;
`;

export const MemberContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin-bottom: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 4px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  object-fit: cover;
  object-position: center;
`;

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const UserInner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Message = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;
