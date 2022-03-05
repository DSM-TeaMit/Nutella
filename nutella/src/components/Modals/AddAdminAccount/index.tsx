import useModalContext from "../../../hooks/useModalContext";
import BlueButton from "../../Buttons/BlueButton";
import BorderButton from "../../Buttons/BorderButton";
import Input from "../../Input";
import * as S from "./styles";

const AddAdminAccountModal = () => {
  const { closeCurrentModal } = useModalContext();

  return (
    <S.Container>
      <S.Inner>
        <S.Title>선생님 계정 추가</S.Title>
        <S.ContentContainer>
          <S.Subtitle>이름</S.Subtitle>
          <Input placeholder="이름을 입력해주세요..." />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>비밀번호</S.Subtitle>
          <Input placeholder="비밀번호를 입력해주세요..." />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>비밀번호 확인</S.Subtitle>
          <Input placeholder="비밀번호를 입력해주세요..." />
        </S.ContentContainer>
      </S.Inner>
      <S.ButtonContainer>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
        <BlueButton>추가</BlueButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddAdminAccountModal;
