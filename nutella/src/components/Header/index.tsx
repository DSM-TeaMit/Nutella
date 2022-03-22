import * as S from "./styles";
import { Logo } from "../../assets/logo";
import { ArrowIcons } from "../../assets/icons";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useHeader } from "../../queries/User";

const Header = () => {
  const { data, isLoading, isError, isSuccess } = useHeader();

  return (
    <S.Container>
      <S.ContentContainer>
        <S.FlexContainer>
          <Link to="/feed">
            <S.Logo alt="logo" src={Logo} />
          </Link>
          <S.SearchInputContainer>
            <SearchInput />
          </S.SearchInputContainer>
        </S.FlexContainer>
        <S.ProfileContainer>
          {isLoading && <S.UserName>로딩중...</S.UserName>}
          {isSuccess && (
            <S.SLink
              to={data?.data.type === "admin" ? "/admin-mypage" : "/mypage"}
            >
              <S.UserName>
                {data?.data.studentNo} {data?.data.name}{" "}
                {data?.data.type === "admin" && "선생님"}
              </S.UserName>
            </S.SLink>
          )}
          {isError && <S.UserName>오류 발생</S.UserName>}
          <S.UserImageContainer>
            <S.SLink
              to={data?.data.type === "admin" ? "/admin-mypage" : "/mypage"}
            >
              <S.UserImage
                src={data?.data.thumbnailUrl}
                emoji={data?.data.emoji}
              />
            </S.SLink>
            <S.ArrowContainer>
              <S.Arrow>
                <img src={ArrowIcons} alt="profile arrow" />
              </S.Arrow>
              <S.Logout>로그아웃</S.Logout>
            </S.ArrowContainer>
          </S.UserImageContainer>
        </S.ProfileContainer>
      </S.ContentContainer>
      <S.Line />
    </S.Container>
  );
};

export default Header;
