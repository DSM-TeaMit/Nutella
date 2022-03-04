import { useNavigate } from "react-router-dom";
import { FC, useCallback, useEffect } from "react";
import useMessageContext from "../../hooks/useMessageContext";
import { useOauthGoogle } from "../../queries/Signup";
import * as S from "./styles";

const SignLoadingContainer: FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const { showMessage } = useMessageContext();
  const { data } = useOauthGoogle(code);

  const onLand = useCallback(() => {
    if (!data) {
      return;
    }

    const { type } = data.data;

    if (type === "registration") {
      navigate("/signup");
      return;
    } else {
      navigate("/feed");
      showMessage({
        type: "Positive",
        title: "로그인 성공",
        content: "Teamit에 오신걸 환영합니다.",
      });
    }
  }, [data, navigate, showMessage]);

  useEffect(() => {
    onLand();
  }, [onLand]);

  return (
    <>
      <S.Container>
        <div>
          <S.Title>인증중입니다...</S.Title>
          <S.Description>잠시만 기다려주세요.</S.Description>
        </div>
      </S.Container>
    </>
  );
};

export default SignLoadingContainer;
