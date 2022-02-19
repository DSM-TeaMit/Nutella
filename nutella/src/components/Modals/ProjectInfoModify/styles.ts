import styled from "@emotion/styled";

export const ProjectModifyModalContainer = styled.div`
  width: 547px;
  height: 507px;
  border-radius: 10px;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ContentBox = styled.div`
  width: 483px;
  height: 300px;
  margin: 40px auto 36px;
`;

export const Content = styled.div`
  margin-bottom: 40px;
  width: 483px;
  height: fit-content;
  :nth-child(2) {
    height: 110px;
  }
  :nth-child(3) {
    input {
      border: none;
      width: fit-content;
    }
  }
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const InputBox = styled.input`
  width: 480px;
  height: fit-content;
  margin-top: 9px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  ::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const ExplanationBox = styled.textarea`
  width: 480px;
  height: auto;
  overflow-y: hidden;
  margin-top: 9px;
  border: none;
  min-height: 30px;
  max-height: 76px;
  outline: none;
  resize: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const FiedBox = styled.div`
  display: flex;
  margin-bottom: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const TagBox = styled.div`
  height: 32px;
  display: flex;
`;

export const Tag = styled.div`
  padding: 2px 4px;
  width: fit-content;
  border-radius: 5px;
  margin-right: 4px;
  margin-top: 2px;
  height: 30px;
  font: ${({ theme }) => theme.fonts.body3};
  background: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const BtnBox = styled.div`
  width: 483px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;

export const Btn = styled.div`
  width: 62px;
  height: 38px;
  background: ${({ theme }) => theme.colors.primary.default};
  border-radius: 10px;
  padding: 6px 15px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.white};
  cursor: pointer;
`;

export const CancelBtn = styled(Btn)`
  border: 1px solid black;
  background: none;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const DelBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.red.default};
`;
