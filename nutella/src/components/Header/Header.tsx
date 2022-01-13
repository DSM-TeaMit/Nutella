import * as S from "./styles";
import LogoImg from "../../assets/logo/Logo.svg";
import ArrowImg from "../../assets/icons/arrow.svg";
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
        <S.ProfileContainer>
          <S.UserName>2105 김진근</S.UserName>
          <S.UserImageContainer>
            <S.UserImage src="" alt="" />
            <S.Arrow>
              <img src={ArrowImg} alt="profile arrow" />
            </S.Arrow>
          </S.UserImageContainer>
        </S.ProfileContainer>
      </S.ContentContainer>
      <S.Line />
    </S.Container>
  );
};

export default Header;
