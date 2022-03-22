import { Route, Routes, useNavigate } from "react-router-dom";
import NavigationType from "../../../interface/Navigation";
import SideBar from "../../SideBar";
import * as S from "../styles";
import {
  DocumentEditIcons,
  DocumentIcons,
  PersonalIcons,
  SettingIcons,
} from "../../../assets/icons";
import Profile from "./Contents/Profile";
import Project from "./Contents/Project";
import Report from "./Contents/Report";
import Setting from "./Contents/Setting";
import { useMyProfile } from "../../../queries/User";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
  {
    text: "보고서",
    to: "report",
    icon: DocumentEditIcons,
  },
  {
    text: "계정 설정",
    to: "setting",
    icon: SettingIcons,
  },
];

const MyPage = () => {
  const myPageQuery = useMyProfile();

  const { isError, error } = myPageQuery;
  const navigate = useNavigate();

  useEffect(() => {
    if (
      isError &&
      axios.isAxiosError(error) &&
      error.response?.status === 403
    ) {
      navigate("/admin-mypage");
      toast.error("접근 권한이 없습니다.");
    }
  }, [error, isError, navigate]);

  return (
    <S.Container>
      <S.Inner>
        <S.SideBarContainer>
          <SideBar navs={navs} data={myPageQuery} />
        </S.SideBarContainer>
        <S.ContentContainer>
          <Routes>
            <Route path="/" element={<Profile data={myPageQuery} />} />
            <Route path="/project" element={<Project />} />
            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default MyPage;
