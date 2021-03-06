import { Route, Routes, useParams } from "react-router-dom";
import { NavigationType } from "../../../interface";
import SideBar from "../../SideBar";
import * as S from "../styles";
import { DocumentIcons, PersonalIcons } from "../../../assets/icons";
import Profile from "./Contents/Profile";
import Project from "./Contents/Project";
import { useUserProfile } from "../../../queries/User";
import NotFound from "../NotFound";
import useTitle from "../../../hooks/useTitle";

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

  useTitle(
    profileQuery.isError
      ? "오류 발생"
      : `${profileQuery.data?.data.studentNo || ""} ${
          profileQuery.data?.data.name || ""
        }${!profileQuery.isLoading && !profileQuery.isError ? "의" : ""} 프로필`
  );

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
            <Route
              path="*"
              element={
                <NotFound message="프로필로 돌아가기" to={`/user/${uuid}`} />
              }
            />
          </Routes>
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default User;
