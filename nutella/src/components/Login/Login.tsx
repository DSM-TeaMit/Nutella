import * as S from "./styles";
import LoginLogoImg from "../../assets/logo/LoginLogo.svg";
import GoogleLogoImg from "../../assets/logo/GoogleLogo.svg";
import { LineIcons, RightArrowIcons } from "../../assets/icons";

const Login = () => {
  return (
    <S.LoginBox>
      <S.LoginContent>
        <S.Logo alt="LoginLogoImg" src={LoginLogoImg} />
        <S.OauthBox>
          <S.OauthContent>
            <S.Title>회원가입</S.Title>
            <S.OauthBtn>
              <img src={GoogleLogoImg} />
              Google 계정으로 계속하기
            </S.OauthBtn>
          </S.OauthContent>
          <S.Divider>
            <img src={LineIcons} />
            <span>또는</span>
            <img src={LineIcons} />
          </S.Divider>
          <S.OauthContent>
            <S.Title>로그인</S.Title>
            <S.OauthBtn>
              <img src={GoogleLogoImg} />
              Google 계정으로 계속하기
            </S.OauthBtn>
          </S.OauthContent>
        </S.OauthBox>
        <S.TeaLogin>
          선생님으로 <span>로그인</span>
          <img src={RightArrowIcons} />
        </S.TeaLogin>
      </S.LoginContent>
    </S.LoginBox>
  );
};

export default Login;
