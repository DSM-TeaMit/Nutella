import * as S from "./styles";
import { Logo } from "../../assets/logo";
import { ArrowIcons } from "../../assets/icons";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.FlexContainer>
          <Link to="/">
            <S.Logo alt="logo" src={Logo} />
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
              <img src={ArrowIcons} alt="profile arrow" />
            </S.Arrow>
          </S.UserImageContainer>
        </S.ProfileContainer>
      </S.ContentContainer>
      <S.Line />
    </S.Container>
  );
};

export default Header;
