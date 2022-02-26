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
  const { data } = queryData;

  return (
    <S.Container>
      <S.InfoContainer>
        <S.ProfileImage alt="" src="" />
        <S.TextContainer>
          <S.Name>{data?.data.name}</S.Name>
          <S.Email>{data?.data.email}</S.Email>
        </S.TextContainer>
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
