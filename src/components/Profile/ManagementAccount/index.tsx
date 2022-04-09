import { NavigationType } from "../../../interface";
import * as I from "../styles";
import * as S from "./styles";
import { SettingIcons } from "../../../assets/icons";
import AdminSideBar from "../../SideBar/Admin";
import Account from "./Account";
import { Fragment, useCallback, useEffect } from "react";
import ModalPortal from "../../ModalPortal";
import AddAdminAccountModal from "../../Modals/AddAdminAccount";
import useModalRef from "../../../hooks/useModalRef";
import { useCreatedAccount } from "../../../queries/Admin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const navs: NavigationType[] = [
  {
    text: "계정 관리",
    to: "",
    icon: SettingIcons,
  },
];

const ManagementAccount = () => {
  const modalRef = useModalRef();
  const { data, isLoading, isError, error } = useCreatedAccount();
  const navigate = useNavigate();

  const onAddClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      modalRef.current?.show();
    },
    [modalRef]
  );

  useEffect(() => {
    if (
      isError &&
      axios.isAxiosError(error) &&
      error.response?.status === 403
    ) {
      navigate("/mypage");
      toast.error("접근 권한이 없습니다.");
    }
  }, [isError, error, navigate]);

  if (isLoading) {
    return (
      <I.Error>
        <I.Message>로딩중...</I.Message>
      </I.Error>
    );
  }

  if (isError) {
    return (
      <I.Error>
        <I.Message>오류 발생.</I.Message>
        {axios.isAxiosError(error) && error.response?.status === 403 && (
          <I.Message>접근 권한이 없습니다.</I.Message>
        )}
        {axios.isAxiosError(error) && error.response?.status !== 403 && (
          <I.Message>다시 시도해주세요.</I.Message>
        )}
      </I.Error>
    );
  }

  return (
    <Fragment>
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
                    {data?.data.accounts.map((value) => (
                      <Account data={value} key={value.uuid} />
                    ))}
                    {data?.data.count === 0 && (
                      <I.Message>생성한 계정이 없습니다.</I.Message>
                    )}
                  </S.Container>
                  <S.AddAccount onClick={onAddClick}>
                    + 선생님 계정 추가
                  </S.AddAccount>
                </div>
              </I.FlexContainer>
            </I.ContentInner>
          </I.ContentContainer>
        </I.Inner>
      </I.Container>
      <ModalPortal ref={modalRef}>
        <AddAdminAccountModal />
      </ModalPortal>
    </Fragment>
  );
};

export default ManagementAccount;
