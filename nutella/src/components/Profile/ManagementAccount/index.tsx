import NavigationType from "../../../interface/Navigation";
import * as I from "../styles";
import * as S from "./styles";
import { SettingIcons } from "../../../assets/icons";
import AdminSideBar from "../../SideBar/Admin";
import Account from "./Account";

const navs: NavigationType[] = [
  {
    text: "계정 관리",
    to: "",
    icon: SettingIcons,
  },
];

const ManagementAccount = () => {
  return (
    <I.Container>
      <I.Inner>
        <I.SideBarContainer>
          <AdminSideBar navs={navs} />
        </I.SideBarContainer>
        <I.ContentContainer>
          <I.ContentInner>
            <I.FlexContainer>
              <div>
                <S.Title>계정 관리</S.Title>
                <S.Container>
                  <Account />
                  <Account />
                  <Account />
                  <Account />
                </S.Container>
                <S.AddAccount>+ 선생님 계정 추가</S.AddAccount>
              </div>
            </I.FlexContainer>
          </I.ContentInner>
        </I.ContentContainer>
      </I.Inner>
    </I.Container>
  );
};

export default ManagementAccount;
