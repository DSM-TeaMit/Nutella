import * as S from "./styles";
import LogoImg from "../../assets/logo/Logo.svg";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.FlexContainer>
          <Link to="/">
            <S.Logo alt="logo" src={LogoImg} />
          </Link>
          <S.SearchInputContainer>
            <SearchInput />
          </S.SearchInputContainer>
        </S.FlexContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Header;
