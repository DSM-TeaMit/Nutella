import * as S from "./styles";
import { GoogleLogo, LoginLogo } from "../../assets/logo";
import { LineIcons, RightArrowIcons } from "../../assets/icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <S.LoginContent>
      <S.Logo alt="LoginLogoImg" src={LoginLogo} />
      <S.OauthBox>
        <S.OauthContent>
          <S.Title>회원가입</S.Title>
          <Link to="/signup">
            <S.OauthBtn>
              <img src={GoogleLogo} />
              Google 계정으로 계속하기
            </S.OauthBtn>
          </Link>
        </S.OauthContent>
        <S.Divider>
          <img src={LineIcons} />
          <span>또는</span>
          <img src={LineIcons} />
        </S.Divider>
        <S.OauthContent>
          <S.Title>로그인</S.Title>
          <S.OauthBtn>
            <img src={GoogleLogo} />
            Google 계정으로 계속하기
          </S.OauthBtn>
        </S.OauthContent>
      </S.OauthBox>
      <Link to="/teacherlogin">
        <S.TeaLogin>
          선생님으로 <span>로그인</span>
          <img src={RightArrowIcons} />
        </S.TeaLogin>
      </Link>
    </S.LoginContent>
  );
};

export default Login;
