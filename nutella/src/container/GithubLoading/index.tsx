import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../queries/Signup";
import { githubOauth } from "../../utils/api/Signup";

const GithubLoadingContainer = () => {
  const navigate = useNavigate();
  const infoMutation = useUserInfo();
  const code = new URL(window.location.href).searchParams.get("code");

  const onRequest = async () => {
    try {
      await githubOauth(code);
      // 깃허브 로그인이 되면 실행 시키고 싶은데 생각하니 data가 없는... onSubmit();
    } catch {
      alert("깃허브 로그인에 실패하셨습니다.");
    }
  };

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

  useEffect(() => {
    onRequest();
  }, []);

  return (
    <>
      <div>회원가입 중입니다...</div>
    </>
  );
};

export default GithubLoadingContainer;
