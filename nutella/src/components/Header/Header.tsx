import * as S from "./styles";
import LogoImg from "../../assets/logo/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <Link to="/">
          <S.Logo alt="logo" src={LogoImg} />
        </Link>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Header;
