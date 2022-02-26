import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import NavigationType from "../../../interface/Navigation";
import SideBar from "../../SideBar";
import * as S from "../styles";
import { DocumentIcons, PersonalIcons } from "../../../assets/icons";
import Profile from "./Contents/Profile";
import Project from "./Contents/Project";
import { useUserProfile } from "../../../queries/User";
import { useEffect } from "react";
import useMessageContext from "../../../hooks/useMessageContext";

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
  const { isError } = profileQuery;
  const { showMessage } = useMessageContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      showMessage({
        type: "Denial",
        title: "유저 프로필을 가져오는데 실패하였습니다.",
        content: `잠시 후 다시 시도해보거나, 경로를 확인해보세요.`,
      });

      navigate("/mypage");
    }
  }, [isError, showMessage, navigate]);

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
