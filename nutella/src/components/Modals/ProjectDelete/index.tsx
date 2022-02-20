import useModalContext from "../../../hooks/useModalContext";
import * as S from "./styles";

const ProjectDeleteModal = () => {
  const { closeCurrentModal } = useModalContext();

  return (
    <S.ProjectDeleteContainer>
      <S.Title>프로젝트 삭제</S.Title>
      <S.ContentBox>
        <S.ContentText>프로젝트를 삭제하시겠습니까?</S.ContentText>
        <S.ContentText>
          삭제한 프로젝트는 <span>복구 할 수 없습니다.</span>
        </S.ContentText>
        <S.ContentText>
          삭제를 진행하시려면 <span>Teamit</span>을 입력해 주세요.
        </S.ContentText>
        <S.InputBox placeholder="Teamit을 입력해 주세요." />
      </S.ContentBox>
      <S.BtnBox>
        <S.Btn>삭제</S.Btn>
        <S.CancelBtn onClick={closeCurrentModal}>취소</S.CancelBtn>
      </S.BtnBox>
    </S.ProjectDeleteContainer>
  );
};

export default ProjectDeleteModal;
