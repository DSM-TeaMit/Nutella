import Navigation from "./Navigation";
import * as S from "./styled";
import Personal from "../../../assets/icons/personal.svg";
import Document from "../../../assets/icons/document.svg";
import DocumentEdit from "../../../assets/icons/document_edit.svg";
import Setting from "../../../assets/icons/setting.svg";

interface NavigationType {
  to: string;
  text: string;
  icon: string;
}

const SideBar = () => {
  const navs: NavigationType[] = [
    {
      text: "프로필",
      to: "*",
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

  return (
    <S.Container>
      {navs.map(({ to, text, icon }) => (
        <Navigation to={to}>
          <img alt="profile" src={icon} />
          <div>{text}</div>
        </Navigation>
      ))}
    </S.Container>
  );
};

export default SideBar;
