import useInputs, { NameTypes } from "../../../hooks/useInputs";
import useModalContext from "../../../hooks/useModalContext";
import { BlueButton, BorderButton } from "../../Buttons";
import Input from "../../Input";
import * as S from "./styles";

interface Inputs extends NameTypes {
  name: string;
  uid: string;
  password: string;
  passwordCheck: string;
}

const AddAdminAccountModal = () => {
  const { closeCurrentModal } = useModalContext();

  const [inputProps] = useInputs<Inputs>({
    name: "",
    password: "",
    uid: "",
    passwordCheck: "",
  });

  return (
    <S.Container>
      <S.Inner>
        <S.Title>선생님 계정 추가</S.Title>
        <S.ContentContainer>
          <S.Subtitle>이름</S.Subtitle>
          <Input placeholder="이름을 입력해주세요..." {...inputProps["name"]} />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>아이디</S.Subtitle>
          <Input
            placeholder="아이디를 입력해주세요..."
            {...inputProps["uid"]}
          />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>비밀번호</S.Subtitle>
          <Input
            placeholder="비밀번호를 입력해주세요..."
            {...inputProps["password"]}
          />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>비밀번호 확인</S.Subtitle>
          <Input
            placeholder="비밀번호를 입력해주세요..."
            {...inputProps["passwordCheck"]}
          />
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
