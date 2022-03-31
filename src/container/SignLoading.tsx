import { useNavigate } from "react-router-dom";
import { FC, useCallback, useEffect } from "react";
import { useOauthGoogle } from "../queries/Signup";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const SignLoadingContainer: FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const { data } = useOauthGoogle(code);

  const onLand = useCallback(() => {
    if (!code) {
      navigate("/");
      toast.error("잘못된 접근 방식입니다.");
    }

    if (!data) {
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
  }, [code, data, navigate]);

  useEffect(() => {
    onLand();
  }, [onLand]);

  return <Loading />;
};

export default SignLoadingContainer;
