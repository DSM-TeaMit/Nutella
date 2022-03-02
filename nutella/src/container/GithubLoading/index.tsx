import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOauthGithubSignup, useUserInfo } from "../../queries/Signup";
import useMessageContext from "../../hooks/useMessageContext";

const GithubLoadingContainer = () => {
  const navigate = useNavigate();
  const infoMutation = useUserInfo();
  const code = new URL(window.location.href).searchParams.get("code");
  const { showMessage } = useMessageContext();

  // useOauthGithubSignup(code);

  // const onSubmit = () => {
  //   infoMutation.mutate(
  //     { studentNo: studentId, name: studentName, githubId: githubId },
  //     { onSuccess: onSubmitSuccess }
  //   );
  // };

  // const onSubmitSuccess = () => {
  //   setStudentID("");
  //   setStudentName("");
  //   setGithubId("");
  //   navigate("/feed");
  // };

  return (
    <>
      <div>회원가입 중입니다...</div>
    </>
  );
};

export default GithubLoadingContainer;
