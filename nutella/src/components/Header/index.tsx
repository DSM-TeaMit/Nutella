import * as S from "./styles";
import { Logo } from "../../assets/logo";
import { ArrowIcons } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useHeader } from "../../queries/User";
import { useCallback, useState } from "react";
import useOuterClick from "../../hooks/useOuterClick";
import storageKeys from "../../constant/StorageKeys";
import toast from "react-hot-toast";

const Header = () => {
  const { data, isLoading, isError, isSuccess } = useHeader();
  const [isActive, setIsActive] = useState<boolean>(false);
  const ref = useOuterClick<HTMLButtonElement>(() => setIsActive(false));
  const navigate = useNavigate();

  const onArrowClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    localStorage.removeItem(storageKeys.accessToken);
    localStorage.removeItem(storageKeys.refreshToken);
    localStorage.removeItem(storageKeys.expireAt);
    navigate("/");

    toast.success("로그아웃 되었습니다.");
  }, [navigate]);

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
              <S.Arrow ref={ref} onClick={onArrowClick}>
                <img
                  src={ArrowIcons}
                  alt="profile arrow"
                  style={{ transform: `rotate(${isActive ? 180 : 0}deg)` }}
                />
              </S.Arrow>
              {isActive && <S.Logout onClick={onLogout}>로그아웃</S.Logout>}
            </S.ArrowContainer>
          </S.UserImageContainer>
        </S.ProfileContainer>
      </S.ContentContainer>
      <S.Line />
    </S.Container>
  );
};

export default Header;
