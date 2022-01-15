import Navigation from "./Navigation";
import * as S from "./styled";
import NavigationType from "../../../interface/Navigation";
import { FC } from "react";

interface PropsType {
  navs: NavigationType[];
}

const SideBar: FC<PropsType> = ({ navs }) => {
  return (
    <S.Container>
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
