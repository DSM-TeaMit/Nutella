import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOauthGithubSignup, useUserInfo } from "../queries/Signup";

const GithubLoadingContainer = () => {
  const navigate = useNavigate();
  const infoMutation = useUserInfo();
  const code = new URL(window.location.href).searchParams.get("code");

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
