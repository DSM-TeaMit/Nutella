import React, { useCallback, useMemo, useState } from "react";
import useInputs, { NameTypes } from "../../../hooks/useInputs";
import useModalContext from "../../../hooks/useModalContext";
import { useAccountMutation } from "../../../queries/Admin";
import { BlueButton, BorderButton } from "../../Buttons";
import Input from "../../Input";
import * as S from "./styles";

interface Inputs extends NameTypes {
  name: string;
  password: string;
  passwordCheck: string;
}

const AddAdminAccountModal = () => {
  const { closeCurrentModal } = useModalContext();
  const accoutMutation = useAccountMutation();
  const [id, setId] = useState<string>("");

  const [inputProps, [inputs]] = useInputs<Inputs>({
    name: "",
    password: "",
    passwordCheck: "",
  });

  const { name, password, passwordCheck, uid } = inputs;

  const onAddClick = useCallback(() => {
    if (window.confirm("추가하시겠습니까?")) {
      accoutMutation.mutate({ id, name, password }, { onSuccess: closeCurrentModal });
    }
  }, [accoutMutation, closeCurrentModal, id, name, password]);

  //숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
  const regex = useMemo(
    () => /(?=.*\d{1,50})(?=.*[~`!@#$%\\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/,
    []
  );

  const disabled = useMemo(
    () =>
      [name, password, passwordCheck, id].some((value) => value.length === 0) ||
      password !== passwordCheck ||
      !regex.test(password) ||
      accoutMutation.isLoading,
    [accoutMutation.isLoading, id, name, password, passwordCheck, regex]
  );

  const onIdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[A-Za-z0-9+]*$/.test(e.target.value)) {
      setId(e.target.value);
    }
  }, []);

  return (
    <S.Container>
      <S.Inner>
        <S.Title>선생님 계정 추가</S.Title>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>이름</S.Subtitle>
          </S.SubtitleContainer>
          <Input placeholder="이름을 입력해주세요..." {...inputProps["name"]} />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>아이디</S.Subtitle>
          </S.SubtitleContainer>
          <Input placeholder="아이디를 입력해주세요..." value={id} onChange={onIdChange} />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>비밀번호</S.Subtitle>
            {password.length > 0 && !regex.test(password) && (
              <S.Error>8자 이상, 하나 이상의 문자, 숫자 및 특수 문자</S.Error>
            )}
          </S.SubtitleContainer>
          <Input
            placeholder="비밀번호를 입력해주세요..."
            {...inputProps["password"]}
            type="password"
          />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.SubtitleContainer>
            <S.Subtitle>비밀번호 확인</S.Subtitle>
            {password !== passwordCheck && <S.Error>다시 확인해주세요.</S.Error>}
          </S.SubtitleContainer>
          <Input
            placeholder="비밀번호를 입력해주세요..."
            {...inputProps["passwordCheck"]}
            type="password"
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
