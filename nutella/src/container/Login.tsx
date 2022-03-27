import Login from "../components/Login";
import Background from "../components/LoginBackground";
import useTitle from "../hooks/useTitle";

const LoginContainer = () => {
  useTitle("로그인");

  return (
    <>
      <Background height={350} />
      <Login />
    </>
  );
};

export default LoginContainer;
