import styled from "@emotion/styled";

export const ProjectMemberModifyModalContainer = styled.div`
  width: 414px;
  height: 481px;
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
  height: 364px;
`;

export const MemberBox = styled.div`
  width: 350px;
  height: 88px;
  margin-bottom: 24px;
`;

export const MemberProfile = styled.div`
  display: flex;
  width: 350px;
  height: 32px;
  justify-content: space-between;
  margin-bottom: 12px;
  span {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.red.default};
  }
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
  width: 350px;
  height: 42px;
  display: flex;
  padding: 8px 16px;
  border-radius: 10px;
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
