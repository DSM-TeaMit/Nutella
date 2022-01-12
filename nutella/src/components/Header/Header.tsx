import * as S from "./styles";
import LogoImg from "../../assets/logo/Logo.svg";

const Header = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.LogoButton>
          <S.Logo alt="logo" src={LogoImg} />
        </S.LogoButton>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Header;
