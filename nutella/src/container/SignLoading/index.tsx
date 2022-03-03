import { useNavigate, useParams } from "react-router-dom";
import React, { FC, useCallback, useEffect } from "react";
import useMessageContext from "../../hooks/useMessageContext";
import { useOauthGoogle } from "../../queries/Signup";

const SignLoadingContainer: FC = () => {
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();
  const { showMessage } = useMessageContext();
  const { data } = useOauthGoogle(code);

  const onLand = useCallback(() => {
    if (!data) {
      return;
    }

    const { type } = data.data;

    if (!type) {
      showMessage({
        type: "Denial",
        title: "회원가입에 실패하였습니다.",
        content: "학교 계정인지 확인해 주세요.",
      });
      navigate("/");
    } else if (type === "registration") {
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
