import Navigation from "./Navigation";
import * as S from "./styles";
import NavigationType from "../../interface/Navigation";
import { FC } from "react";
import { UseQueryResult } from "react-query";
import { MyProfileType, UserProfileType } from "../../utils/api/User";
import { AxiosResponse } from "axios";

interface PropsType {
  navs: NavigationType[];
  data: UseQueryResult<
    AxiosResponse<MyProfileType | UserProfileType, any>,
    unknown
  >;
}

const SideBar: FC<PropsType> = ({ navs, data: queryData }) => {
  const { data, isError, isLoading } = queryData;

  return (
    <S.Container>
      <S.InfoContainer>
        <S.ProfileImage alt="image" src={data?.data.thumbnailUrl} />
        {isError ? (
          <S.TextContainer>
            <S.Name>오류 발생</S.Name>
          </S.TextContainer>
        ) : (
          <S.TextContainer>
            <S.Name>{isLoading ? "로딩중..." : data?.data.name}</S.Name>
            <S.Email>{isLoading ? "로딩중..." : data?.data.email}</S.Email>
          </S.TextContainer>
        )}
      </S.InfoContainer>
      <S.Line />
      <S.NavContainer>
        {navs.map(({ to, text, icon }, index) => (
          <Navigation end to={to} key={index}>
            <img alt="profile" src={icon} />
            <div>{text}</div>
          </Navigation>
        ))}
      </S.NavContainer>
    </S.Container>
  );
};

export default SideBar;
