import { useNavigate } from "react-router-dom";
import React, { FC, useEffect } from "react";
import useMessageContext from "../../hooks/useMessageContext";
import { useOauthGoogleSingup } from "../../queries/Signup";

const SignLoadingContainer: FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  localStorage.setItem("google_code", code || "");
  const { showMessage } = useMessageContext();

  const { data } = useOauthGoogleSingup(code);

  useEffect(() => {
    if (data) {
      if (data.data.type === undefined) {
        showMessage({
          type: "Denial",
          title: "회원가입에 실패하였습니다.",
          content: "학교 계정인지 확인해 주세요.",
        });
        navigate("/");
      } else if (data.data.type === "registration") {
        navigate("/signup");
      } else {
        showMessage({
          type: "Denial",
          title: "이미 회원가입이 된 계정입니다.",
          content: "로그인을 통해 사용해 주세요.",
        });
        navigate("/");
      }
    }
  }, [data, navigate, showMessage]);

  return (
    <>
      <div>회원가입 중입니다...</div>
    </>
  );
};

export default SignLoadingContainer;
