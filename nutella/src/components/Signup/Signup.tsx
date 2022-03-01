import * as S from "./styles";
import { LeftArrow } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserInfo } from "../../queries/Signup";
import BlueButton from "../Buttons/BlueButton";

const Signup = () => {
  const infoMutation = useUserInfo();
  const [studentId, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [githubId, setGithubId] = useState("");
  const navigate = useNavigate();

  const onStudentIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentID(e.currentTarget.value);
  };

  const onStudentNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.currentTarget.value);
  };

  const onGithubIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithubId(e.currentTarget.value);
  };

  const onClickBtn = () => {
    if (githubId !== "") {
      const OauthUrl = "https://spectre-psnldev.dev:8202/auth/github";
      window.location.href = OauthUrl;
    } else {
      onSubmit();
    }
  };

  const onSubmit = () => {
    infoMutation.mutate(
      { studentNo: studentId, name: studentName, githubId: githubId },
      { onSuccess: onSubmitSuccess }
    );
  };

  const onSubmitSuccess = () => {
    setStudentID("");
    setStudentName("");
    setGithubId("");
    navigate("/feed");
  };

  return (
    <S.SignupContent>
      <S.Title>정보입력</S.Title>
      <S.Box>
        <S.SubTitle>학번</S.SubTitle>
        <S.Input
          type="text"
          onChange={onStudentIdInput}
          placeholder="학번을 입력해 주세요..."
        />
      </S.Box>
      <S.Box>
        <S.SubTitle>이름</S.SubTitle>
        <S.Input
          type="text"
          onChange={onStudentNameInput}
          placeholder="이름을 입력해 주세요..."
        />
      </S.Box>
      <S.Box>
        <S.SubTitle>Github 아이디(선택)</S.SubTitle>
        <S.Input
          type="text"
          onChange={onGithubIdInput}
          placeholder="Github 아이디를 입력해 주세요..."
        />
      </S.Box>
      <S.ClickBox>
        <Link to="/">
          <S.LoginText>
            <img src={LeftArrow} />
            <span>로그인</span>
          </S.LoginText>
        </Link>
        <BlueButton onClick={onClickBtn}>회원가입</BlueButton>
      </S.ClickBox>
    </S.SignupContent>
  );
};

export default Signup;
