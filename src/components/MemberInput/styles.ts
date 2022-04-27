import styled from "@emotion/styled";
import Img from "../Img";

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

export const Enter = styled.span`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
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

export const ProfileImage = styled(Img)`
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
  text-align: center;
`;

export const MemberButton = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: none;
`;

export const SelectedMember = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 100%;
`;

export const Tags = styled.div`
  flex: 1;
  overflow-x: hidden;
  & div {
    flex: 1;
  }
`;

export const Remove = styled.button`
  border: none;
  background-color: transparent;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.red.default};
  cursor: pointer;
`;

export const MemberBox = styled.div`
  height: fit-content;
`;

export const MemberContent = styled.div`
  margin-top: 30px;
  div:nth-child(1) {
    margin-bottom: none;
  }
`;

export const MemberProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Delete = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.red.default};
  cursor: pointer;
`;

export const User = styled.div`
  display: fixed;
  height: 32px;
  img {
    width: 32px;
    height: 32px;
    background: grey;
    border-radius: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
  span {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.gray2};
  }
`;

export const RollBox = styled.div`
  display: flex;
  padding: 10px 16px;
  border-radius: 12px;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
  margin-bottom: 19px;
  background: ${({ theme }) => theme.colors.grayscale.lightGray1};
`;
