import { FC, useCallback, useMemo } from "react";
import githubOauthUrl from "../../../constant/GithubOAuth";
import useInput from "../../../hooks/useInput";
import useModalContext from "../../../hooks/useModalContext";
import { BlueButton, BorderButton } from "../../Buttons";
import Input from "../../Input";
import * as S from "./styles";

interface PropsType {
  githubId?: string;
}

const GithubIdModal: FC<PropsType> = ({ githubId }) => {
  const { closeCurrentModal } = useModalContext();

  const [inputProps, [input]] = useInput(githubId);

  const disabled = useMemo<boolean>(() => input === githubId || input.toString().length <= 0, [githubId, input]);

  const onClick = useCallback(() => {
    window.location.href = `${githubOauthUrl}?redirectUri=github-id/${input}`;
  }, [input]);

  return (
    <S.Container>
      <S.Title>Github 아이디 변경</S.Title>
      <S.Form>
        <S.FormTitle>Github 아이디</S.FormTitle>
        <Input placeholder="Github 아이디를 입력해주세요..." {...inputProps} />
      </S.Form>
      <S.ButtonContainer>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
        <BlueButton disabled={disabled} onClick={onClick}>
          인증
        </BlueButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default GithubIdModal;
