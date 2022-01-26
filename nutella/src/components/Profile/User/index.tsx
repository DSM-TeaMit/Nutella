import { Route, Routes } from "react-router-dom";
import NavigationType from "../../../interface/Navigation";
import SideBar from "../../SideBar";
import * as S from "../styles";
import { DocumentIcons, PersonalIcons } from "../../../assets/icons";

const navs: NavigationType[] = [
  {
    text: "프로필",
    to: "",
    icon: PersonalIcons,
  },
  {
    text: "프로젝트",
    to: "project",
    icon: DocumentIcons,
  },
];

const User = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.SideBarContainer>
          <SideBar {...{ navs }} />
        </S.SideBarContainer>
        <S.ContentContainer>
          <Routes>
            <Route path="/" element={<div>profile</div>} />
            <Route path="/project" element={<div>project</div>} />
          </Routes>
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default User;
