import { ContentInner } from "../../styles";
import * as S from "./styles";
import { ArrowBlackIcons } from "../../../../assets/icons";
import { useMyProfile } from "../../../../queries/User";
import { Fragment, useCallback } from "react";
import ModalPortal, { ModalPoralRef } from "../../../ModalPortal";
import useModalRef from "../../../../hooks/useModalRef";
import GithubIdModal from "../../../Modals/GithubIdModal";

const Setting = () => {
  const { data, isError, isLoading } = useMyProfile(
    "e973c27b-3e0e-4863-86be-b2e0dfd24908"
  );
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

  if (isError || isLoading) {
    return <></>;
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
        <div>hello world!</div>
      </ModalPortal>
    </Fragment>
  );
};

export default Setting;
