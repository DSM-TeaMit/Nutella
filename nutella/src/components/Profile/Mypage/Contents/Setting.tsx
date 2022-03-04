import { ContentInner } from "../../styles";
import * as S from "./styles";
import { ArrowBlackIcons } from "../../../../assets/icons";
import { useMyProfile } from "../../../../queries/User";
import { Fragment, useCallback, useEffect } from "react";
import ModalPortal, { ModalPoralRef } from "../../../ModalPortal";
import useModalRef from "../../../../hooks/useModalRef";
import GithubIdModal from "../../../Modals/GithubIdModal";
import AccountDeleteModal from "../../../Modals/AccountDeleteModal";
import Loading from "../../Loading";
import Error from "../../Error";
import toast from "react-hot-toast";

const Setting = () => {
  const myProfileQuery = useMyProfile();
  const { data, isError, isLoading } = myProfileQuery;

  const githubModalRef = useModalRef();
  const deleteUserModalRef = useModalRef();

  const openModal = useCallback(
    (ref: React.RefObject<ModalPoralRef>) =>
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();

        ref.current?.show();
      },
    []
  );

  useEffect(() => {
    if (isError) {
      toast.error("유저 설정을 가져올 수 없습니다.");
    }
  }, [isError]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error message="오류 발생. 설정을 가져올 수 없습니다. 다시 시도해주세요." />
    );
  }

  const { githubId } = data!.data;

  return (
    <Fragment>
      <ContentInner>
        <S.SettingContaienr>
          <div>
            <S.Title>계정 설정</S.Title>
            <S.ContentContainer>
              <S.SettingTitle>Github</S.SettingTitle>
              <S.GrayButton onClick={openModal(githubModalRef)}>
                <S.Button>
                  <span>{githubId || "입력하지 않음"}</span>
                  <img alt="github arrow" src={ArrowBlackIcons} />
                </S.Button>
              </S.GrayButton>
            </S.ContentContainer>
          </div>
          <div>
            <S.Subtitle>위험</S.Subtitle>
            <S.ContentContainer>
              <S.SettingTitleRed>계정 삭제</S.SettingTitleRed>
              <S.RedButton onClick={openModal(deleteUserModalRef)}>
                <S.Button>
                  <span>삭제</span>
                  <img alt="github arrow" src={ArrowBlackIcons} />
                </S.Button>
              </S.RedButton>
            </S.ContentContainer>
          </div>
        </S.SettingContaienr>
      </ContentInner>
      <ModalPortal ref={githubModalRef}>
        <GithubIdModal />
      </ModalPortal>
      <ModalPortal ref={deleteUserModalRef}>
        <AccountDeleteModal data={myProfileQuery} />
      </ModalPortal>
    </Fragment>
  );
};

export default Setting;
