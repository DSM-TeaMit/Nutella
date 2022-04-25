import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Background from "../components/LoginBackground";
import storageKeys from "../constant/StorageKeys";
import useTitle from "../hooks/useTitle";

const LoginContainer = () => {
  useTitle("로그인");
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = localStorage.getItem(storageKeys.refreshToken);
    const expireAt = localStorage.getItem(storageKeys.expireAt);

    if (refreshToken && expireAt) {
      navigate("/feed");
    }
  }, [navigate]);

  return (
    <>
      <Background height={350} />
      <Login />
    </>
  );
};

export default LoginContainer;
