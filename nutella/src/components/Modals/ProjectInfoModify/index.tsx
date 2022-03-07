import { Fragment, useCallback, useEffect, useRef } from "react";
import useModalContext from "../../../hooks/useModalContext";
import useModalRef from "../../../hooks/useModalRef";
import BlueButton from "../../Buttons/BlueButton";
import BorderButton from "../../Buttons/BorderButton";
import RedButton from "../../Buttons/RedButton";
import ModalPortal from "../../ModalPortal";
import ProjectDeleteModal from "../ProjectDelete";
import * as S from "./styles";

const ProjectModifyModal = () => {
  const { closeCurrentModal } = useModalContext();
  const ref = useRef<HTMLTextAreaElement>(null);
  const modalRef = useModalRef();

  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "28px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  useEffect(() => {
    handleResizeHeight();
  }, [handleResizeHeight]);

  return (
    <Fragment>
      <S.ProjectModifyModalContainer>
        <S.Title>프로젝트 정보 수정</S.Title>
        <S.ContentBox>
          <S.Content>
            <S.SubTitle>프로젝트 이름</S.SubTitle>
            <S.InputBox defaultValue="Teamit" />
          </S.Content>
          <S.Content>
            <S.SubTitle>프로젝트 설명</S.SubTitle>
            <S.ExplanationBox
              ref={ref}
              rows={1}
              onInput={handleResizeHeight}
              defaultValue="사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다."
            />
          </S.Content>
          <S.Content>
            <S.SubTitle>프로젝트 분야</S.SubTitle>
            <S.FiedBox>
              <S.TagBox>
                <S.Tag>웹</S.Tag>
                <S.Tag>보안</S.Tag>
              </S.TagBox>
              <S.InputBox placeholder="분야를 입력해 주세요." />
            </S.FiedBox>
          </S.Content>
        </S.ContentBox>
        <S.BtnBox>
          <RedButton
            onClick={(e) => {
              e.stopPropagation();
              modalRef.current?.show();
            }}
          >
            삭제
          </RedButton>
          <div>
            <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
            <BlueButton>수정</BlueButton>
          </div>
        </S.BtnBox>
      </S.ProjectModifyModalContainer>
      <ModalPortal ref={modalRef}>
        <ProjectDeleteModal />
      </ModalPortal>
    </Fragment>
  );
};

export default ProjectModifyModal;
