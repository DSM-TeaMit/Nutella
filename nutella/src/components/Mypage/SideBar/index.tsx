import Navigation from "./Navigation";
import * as S from "./styled";

const SideBar = () => {
  return (
    <S.Container>
      <Navigation to="">profile</Navigation>
      <Navigation to="project">project</Navigation>
      <Navigation to="report">report</Navigation>
      <Navigation to="setting">setting</Navigation>
    </S.Container>
  );
};

export default SideBar;
