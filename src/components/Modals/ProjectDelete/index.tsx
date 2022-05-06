import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useModalContext from "../../../hooks/useModalContext";
import { useProjectDetails } from "../../../queries/ProjectDetails";
import { RedButton, BorderButton } from "../../Buttons";
import Input from "../../Input";
import useInput from "../../../hooks/useInput";
import * as S from "./styles";
import { useDeleteProject } from "../../../queries/Project";
import { useCallback } from "react";

const ProjectDeleteModal = () => {
  const { closeCurrentModal, closeAll } = useModalContext();
  const { uuid } = useParams<{ uuid: string }>();
  const { data } = useProjectDetails(uuid || "");
  const [inputProps, [value]] = useInput();
  const deleteProjectMutation = useDeleteProject(uuid || "");
  const navigate = useNavigate();

  const onDeleteError = useCallback(() => {
    toast.error(`${data?.data.projectName}  프로젝트 삭제가 실패되었습니다, 다시 시도해 주세요.`);
  }, [data]);

  const onDeleteSuccess = useCallback(() => {
    closeAll();
    toast.success(`${data?.data.projectName}  프로젝트 삭제가 완료되었습니다.`);
    navigate("/mypage");
  }, [closeAll, data, navigate]);

  const onClickDelete = useCallback(async () => {
    try {
      await deleteProjectMutation.mutateAsync();
      onDeleteSuccess();
    } catch (error) {
      onDeleteError();
    }
  }, [deleteProjectMutation, onDeleteError, onDeleteSuccess]);

  return (
    <S.ProjectDeleteContainer>
      <S.Title>프로젝트 삭제</S.Title>
      <S.ContentBox>
        <div>프로젝트를 삭제하시겠습니까?</div>
        <div>
          삭제한 프로젝트는 <b>복구 할 수 없습니다.</b>
        </div>
        <div>
          삭제를 진행하시려면 <b>{data?.data.projectName}</b>을 입력해 주세요.
        </div>
      </S.ContentBox>
      <Input {...inputProps} placeholder={`${data?.data.projectName} 을 입력해 주세요.`} />
      <S.BtnBox>
        <RedButton disabled={data?.data.projectName !== value} onClick={onClickDelete}>
          삭제
        </RedButton>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
      </S.BtnBox>
    </S.ProjectDeleteContainer>
  );
};

export default ProjectDeleteModal;
