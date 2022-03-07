import * as S from "./styles";
import { Link } from "react-router-dom";
import { LeftArrow } from "../../assets/icons";
import BlueButton from "../Buttons/BlueButton";
import Input from "../Input";

const TeacherLogin = () => {
  const onLogin = () => {};

  return (
    <S.TeacherLoginContent>
      <S.Title>선생님 로그인</S.Title>
      <S.Box>
        <S.SubTitle>아이디</S.SubTitle>
        <Input placeholder="아이디를 입력해 주세요..." />
      </S.Box>
      <S.Box>
        <S.SubTitle>비밀번호</S.SubTitle>
        <Input placeholder="비밀번호를 입력해 주세요..." />
      </S.Box>
      <S.ClickBox>
        <Link to="/">
          <S.LoginText>
            <img src={LeftArrow} />
            <span>학생 로그인</span>
          </S.LoginText>
        </Link>
        <BlueButton onClick={onLogin}>로그인</BlueButton>
      </S.ClickBox>
    </S.TeacherLoginContent>
  );
};

export default TeacherLogin;
