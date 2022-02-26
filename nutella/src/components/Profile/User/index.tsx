import { Route, Routes, useParams } from "react-router-dom";
import NavigationType from "../../../interface/Navigation";
import SideBar from "../../SideBar";
import * as S from "../styles";
import { DocumentIcons, PersonalIcons } from "../../../assets/icons";
import Profile from "./Contents/Profile";
import Project from "./Contents/Project";
import { useUserProfile } from "../../../queries/User";

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
  const { uuid } = useParams<{ uuid: string }>();
  const profileQuery = useUserProfile(uuid || "");

  if (!uuid) {
    return <></>;
  }

  return (
    <S.Container>
      <S.Inner>
        <S.SideBarContainer>
          <SideBar navs={navs} data={profileQuery} />
        </S.SideBarContainer>
        <S.ContentContainer>
          <Routes>
            <Route path="/" element={<Profile data={profileQuery} />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default User;
