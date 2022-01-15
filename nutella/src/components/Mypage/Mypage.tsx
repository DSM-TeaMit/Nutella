import { Route, Routes } from "react-router-dom";
import NavigationType from "../../interface/Navigation";
import SideBar from "./SideBar";
import * as S from "./styles";
import Personal from "../../assets/icons/personal.svg";
import Document from "../../assets/icons/document.svg";
import DocumentEdit from "../../assets/icons/document_edit.svg";
import Setting from "../../assets/icons/setting.svg";

const navs: NavigationType[] = [
  {
    text: "프로필",
    to: "",
    icon: Personal,
  },
  {
    text: "프로젝트",
    to: "project",
    icon: Document,
  },
  {
    text: "보고서",
    to: "report",
    icon: DocumentEdit,
  },
  {
    text: "계정 설정",
    to: "setting",
    icon: Setting,
  },
];

const MyPage = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.SideBarContainer>
          <SideBar {...{ navs }} />
        </S.SideBarContainer>
        <S.ContentContainer>
          <Routes>
            <Route path="/" element={<div>this is profile</div>} />
            <Route path="/project" element={<div>this is project</div>} />
            <Route path="/report" element={<div>this is report</div>} />
            <Route path="/setting" element={<div>this is setting</div>} />
          </Routes>
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default MyPage;
