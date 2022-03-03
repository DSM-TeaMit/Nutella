import { useNavigate, useParams } from "react-router-dom";
import React, { FC, useCallback, useEffect } from "react";
import useMessageContext from "../../hooks/useMessageContext";
import { useOauthGoogle } from "../../queries/Signup";

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
    }
  }, [data, navigate, showMessage]);

  useEffect(() => {
    onLand();
  }, [onLand]);

  return (
    <>
      <div>회원가입 중입니다...</div>
    </>
  );
};

export default SignLoadingContainer;
