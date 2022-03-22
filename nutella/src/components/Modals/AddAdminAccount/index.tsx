import { useCallback, useMemo } from "react";
import useInputs, { NameTypes } from "../../../hooks/useInputs";
import useModalContext from "../../../hooks/useModalContext";
import { useAccountMutation } from "../../../queries/Admin";
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
  const accoutMutation = useAccountMutation();

  const [inputProps, [inputs]] = useInputs<Inputs>({
    name: "",
    password: "",
    uid: "",
    passwordCheck: "",
  });

  const { name, password, passwordCheck, uid } = inputs;

  const onAddClick = useCallback(() => {
    if (window.confirm("추가하시겠습니까?")) {
      accoutMutation.mutate({ id: uid, name, password });
    }
  }, [accoutMutation, name, password, uid]);

  //최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자
  const regex = useMemo(
    () => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
    []
  );

  const disabled = useMemo(
    () =>
      [name, password, passwordCheck, uid].some(
        (value) => value.length === 0
      ) ||
      password !== passwordCheck ||
      !regex.test(password),
    [name, password, passwordCheck, regex, uid]
  );

  const passwordErrorMessage = useMemo(() => {
    if (password.length === 0) {
      return <S.Error>빈칸을 채워주세요.</S.Error>;
    }

    if (!regex.test(password)) {
      return <S.Error>8자 이상, 하나 이상의 문자, 숫자 및 특수 문자</S.Error>;
    }
  }, [password, regex]);

  const passwordCheckErrorMessage = useMemo(() => {
    if (passwordCheck.length === 0) {
      return <S.Error>빈칸을 채워주세요.</S.Error>;
    }

    if (password !== passwordCheck) {
      return <S.Error>다시 확인해주세요.</S.Error>;
    }
  }, [password, passwordCheck]);

  return (
    <S.Container>
      <S.Inner>
        <S.Title>선생님 계정 추가</S.Title>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>이름</S.Subtitle>
            {name.length === 0 && <S.Error>빈칸을 채워주세요.</S.Error>}
          </S.SubtitleContainer>
          <Input placeholder="이름을 입력해주세요..." {...inputProps["name"]} />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>아이디</S.Subtitle>
            {uid.length === 0 && <S.Error>빈칸을 채워주세요.</S.Error>}
          </S.SubtitleContainer>
          <Input
            placeholder="아이디를 입력해주세요..."
            {...inputProps["uid"]}
          />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>비밀번호</S.Subtitle>
            {passwordErrorMessage}
          </S.SubtitleContainer>
          <Input
            placeholder="비밀번호를 입력해주세요..."
            {...inputProps["password"]}
          />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>비밀번호 확인</S.Subtitle>
            {passwordCheckErrorMessage}
          </S.SubtitleContainer>
          <Input
            placeholder="비밀번호를 입력해주세요..."
            {...inputProps["passwordCheck"]}
          />
        </S.ContentContainer>
      </S.Inner>
      <S.ButtonContainer>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
        <BlueButton disabled={disabled} onClick={onAddClick}>
          추가
        </BlueButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default AddAdminAccountModal;
