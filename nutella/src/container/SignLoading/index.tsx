import { useNavigate } from "react-router-dom";
import { FC, useCallback, useEffect } from "react";
import { useOauthGoogle } from "../../queries/Signup";
import * as S from "./styles";
import toast from "react-hot-toast";

const SignLoadingContainer: FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const { data } = useOauthGoogle(code);

  const onLand = useCallback(() => {
    if (!data) {
      navigate("/");
      toast.error("잘못된 접근 방식입니다.");
      return;
    }

    const { type } = data.data;

    if (type === "registration") {
      navigate("/signup");
      return;
    } else {
      navigate("/feed");
      toast.success("로그인 성공");
    }
  }, [data, navigate]);

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
