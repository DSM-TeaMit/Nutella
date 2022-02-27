import * as S from "./styles";
import { LeftArrow } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postUserInfo } from "../../utils/api/Signup";

const Signup = () => {
  const [studentId, setStudentID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [githubId, setGithubId] = useState("");
  const navigate = useNavigate();

  const onStudentIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentID(e.currentTarget.value);
    console.log(studentId);
  };

  const onStudentNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.currentTarget.value);
    console.log(studentName);
  };

  const onGithubIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithubId(e.currentTarget.value);
    console.log(githubId);
  };

  const onSubmit = async () => {
    const data = {
      studentNo: studentId,
      name: studentName,
      githubId: githubId,
    };
    try {
      await postUserInfo(data);
      alert("로그인에 성공하셨습니다.");
      console.log(data);
      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
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
        <S.SignUpBtn onClick={onSubmit}>회원가입</S.SignUpBtn>
      </S.ClickBox>
    </S.SignupContent>
  );
};

export default Signup;
