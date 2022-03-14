import { FC } from "react";
import useModalContext from "../../../hooks/useModalContext";
import { BlueButton, BorderButton } from "../../Buttons";
import Input from "../../Input";
import * as S from "./styles";

const GithubIdModal: FC = () => {
  const { closeCurrentModal } = useModalContext();

  return (
    <S.Container>
      <S.Title>Github 아이디 변경</S.Title>
      <S.Form>
        <S.FormTitle>Github 아이디</S.FormTitle>
        <Input placeholder="Github 아이디를 입력해주세요..." />
      </S.Form>
      <S.ButtonContainer>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
        <BlueButton>인증</BlueButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default GithubIdModal;
