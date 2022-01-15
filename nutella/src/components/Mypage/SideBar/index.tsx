import Navigation from "./Navigation";
import * as S from "./styles";
import NavigationType from "../../../interface/Navigation";
import { FC } from "react";

interface PropsType {
  navs: NavigationType[];
}

const SideBar: FC<PropsType> = ({ navs }) => {
  return (
    <S.Container>
      <S.InfoContainer>
        <S.ProfileImage alt="" src="" />
        <S.TextContainer>
          <S.Name>2105 김진근</S.Name>
          <S.Email>201403kjg@dsm.hs.kr</S.Email>
        </S.TextContainer>
      </S.InfoContainer>
      <S.Line />
      <S.NavContainer>
        {navs.map(({ to, text, icon }) => (
          <Navigation end to={to}>
            <img alt="profile" src={icon} />
            <div>{text}</div>
          </Navigation>
        ))}
      </S.NavContainer>
    </S.Container>
  );
};

export default SideBar;
