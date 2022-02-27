import { useNavigate } from "react-router-dom";
import React, { FC, useEffect, useState } from "react";
import { getOauthSignup } from "../../utils/api/Signup";

const SignupLoadingContainer: FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const onRequest = async () => {
    try {
      const signType = (await getOauthSignup(code))?.data.type;
      console.log(signType);
      if (signType === undefined) {
        alert("학교 계정으로 눌러 주세요.");
        navigate("/");
      } else {
        if (signType === "registration") {
          navigate("/signup");
        } else {
          alert("로그인을 사용해 주세요.");
          navigate("/");
        }
      }
    } catch {
      alert("실패하셨습니다.");
    }
  };

  useEffect(() => {
    onRequest();
  }, []);

  return (
    <>
      <div>회원가입 중입니다...</div>
    </>
  );
};

export default SignupLoadingContainer;
