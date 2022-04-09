import { FC } from "react";
import { NavigationType } from "../../interface";
import Navigation from "./Navigation";
import * as S from "./styles";

interface PropsType {
  navs: NavigationType[];
}

const AdminSideBar: FC<PropsType> = ({ navs }) => {
  return (
    <S.Container>
      <S.InfoContainer>
        <S.ProfileImage />
        <S.TextContainer>
          <S.Name>김진근 선생님</S.Name>
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
