import { FC, Fragment, useCallback, useEffect, useRef } from "react";
import useModalContext from "../../../hooks/useModalContext";
import useModalRef from "../../../hooks/useModalRef";
import Input from "../../Input";
import useTagInput from "../../../hooks/useTagInput";
import { BlueButton, RedButton, BorderButton } from "../../Buttons";
import ModalPortal from "../../ModalPortal";
import TagInput from "../../TagInput";
import ProjectDeleteModal from "../ProjectDelete";
import * as S from "./styles";
import TextareaAutosize from "react-textarea-autosize";

interface PropsType {
  onDeleteProject: () => void;
}

const ProjectModifyModal: FC<PropsType> = ({ onDeleteProject }) => {
  const { closeCurrentModal } = useModalContext();
  const ref = useRef<HTMLTextAreaElement>(null);
  const modalRef = useModalRef();
  const [inputProps] = useTagInput("", [], true);

  return (
    <Fragment>
      <S.ProjectModifyModalContainer>
        <S.Title>프로젝트 정보 수정</S.Title>
        <S.ContentBox>
          <S.Content>
            <S.SubTitle>프로젝트 이름</S.SubTitle>
            <Input defaultValue="Teamit" />
          </S.Content>
          <S.Content>
            <S.SubTitle>프로젝트 설명</S.SubTitle>
            <TextareaAutosize
              minRows={1}
              maxRows={3}
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
              <TagInput {...inputProps} placeholder="분야를 입력해 주세요." />
            </S.FiedBox>
          </S.Content>
        </S.ContentBox>
        <S.BtnBox>
          <RedButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onDeleteProject();
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
