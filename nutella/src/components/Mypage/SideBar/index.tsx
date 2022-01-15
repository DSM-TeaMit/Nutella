import Navigation from "./Navigation";
import * as S from "./styled";
import Personal from "../../../assets/icons/personal.svg";

const SideBar = () => {
  return (
    <S.Container>
      <Navigation to="">
        <img alt="profile" src={Personal} />
        <div>프로필</div>
      </Navigation>
      <Navigation to="project">project</Navigation>
      <Navigation to="report">report</Navigation>
      <Navigation to="setting">setting</Navigation>
    </S.Container>
  );
};

export default SideBar;
