import * as S from "./styles";
import { GoogleLogo, LoginLogo } from "../../assets/logo";
import { RightArrowIcons } from "../../assets/icons";
import { Link } from "react-router-dom";
import baseURL from "../../constant/BaseUrl";

const Login = () => {
  const OauthUrl = `${baseURL}auth/google`;
  const oauthBtnClickHandler = () => {
    window.location.href = OauthUrl;
  };

  return (
    <S.LoginContent>
      <S.Logo alt="LoginLogoImg" src={LoginLogo} />
      <S.OauthContent>
        <S.Title>Teamit에 로그인</S.Title>
        <S.OauthBtn onClick={oauthBtnClickHandler}>
          <img src={GoogleLogo} />
          Google 계정으로 계속하기
        </S.OauthBtn>
      </S.OauthContent>
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
