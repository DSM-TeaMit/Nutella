import { FC } from "react";
import { NavigationType } from "../../interface";
import { useHeader } from "../../queries/User";
import Navigation from "./Navigation";
import * as S from "./styles";

interface PropsType {
  navs: NavigationType[];
}

const AdminSideBar: FC<PropsType> = ({ navs }) => {
  const { data, isError, isLoading, isSuccess } = useHeader();

  return (
    <S.Container>
      <S.InfoContainer>
        <S.ProfileImage src={data?.data.emoji} />
        <S.TextContainer>
          {isLoading && <S.Name>로딩 중...</S.Name>}
          {isError && <S.Name>오류 발생</S.Name>}
          {isSuccess && <S.Name>{data.data.name} 선생님</S.Name>}
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

export default AdminSideBar;
