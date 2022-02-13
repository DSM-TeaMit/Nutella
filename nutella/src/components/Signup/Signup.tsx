import * as S from "./styles";
import { LeftArrow } from "../../assets/icons";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <S.SignupContent>
      <S.Title>정보입력</S.Title>
      <S.Box>
        <S.SubTitle>학번</S.SubTitle>
        <S.Input placeholder="학번을 입력해 주세요..." />
      </S.Box>
      <S.Box>
        <S.SubTitle>이름</S.SubTitle>
        <S.Input placeholder="이름을 입력해 주세요..." />
      </S.Box>
      <S.Box>
        <S.SubTitle>Github 아이디(선택)</S.SubTitle>
        <S.Input placeholder="Github 아이디를 입력해 주세요..." />
      </S.Box>
      <S.ClickBox>
        <Link to="/">
          <S.LoginText>
            <img src={LeftArrow} />
            <span>로그인</span>
          </S.LoginText>
        </Link>
        <S.SignUpBtn>회원가입</S.SignUpBtn>
      </S.ClickBox>
    </S.SignupContent>
  );
};

export default Signup;
