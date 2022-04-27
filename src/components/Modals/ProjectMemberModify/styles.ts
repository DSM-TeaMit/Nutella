import styled from "@emotion/styled";

export const ProjectMemberModifyModalContainer = styled.div`
  border-radius: 10px;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ContentBox = styled.div`
  margin-top: 28px;
  width: 350px;
  height: fit-content;
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

export const MyProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  span {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.red.default};
  }
`;

export const MemberProfile = styled(MyProfile)``;

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

export const TagBox = styled.div`
  height: 32px;
  display: flex;
`;

export const Tag = styled.div`
  padding: 1px 2px;
  width: fit-content;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 2px;
  height: 22px;
  font: ${({ theme }) => theme.fonts.description};
  background: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.grayscale.white};
`;
