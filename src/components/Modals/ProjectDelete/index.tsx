import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useModalContext from "../../../hooks/useModalContext";
import { useProjectDetails } from "../../../queries/ProjectDetails";
import { RedButton, BorderButton } from "../../Buttons";
import Input from "../../Input";
import useInput from "../../../hooks/useInput";
import * as S from "./styles";
import { deleteProject } from "../../../utils/api/Project";

const ProjectDeleteModal = () => {
  const { closeCurrentModal } = useModalContext();
  const { uuid } = useParams<{ uuid: string }>();
  const { data } = useProjectDetails(uuid);
  const [inputProps, [value]] = useInput();

  const onClickDelete = async () => {
    await toast.promise(deleteProject(uuid || ""), {
      error: `${data?.data.projectName} + ""프로젝트 삭제가 실패되었습니다, 다시 시도해 주세요."`,
      success: `${data?.data.projectName} + "프로젝트 삭제가 완료되었습니다."`,
      loading: "삭제 중입니다.",
    });
  };

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
        <Input
          {...inputProps}
          placeholder={`${data?.data.projectName} 을 입력해 주세요.`}
        />
      </S.ContentBox>
      <S.BtnBox>
        <RedButton
          disabled={data?.data.projectName !== value}
          onClick={onClickDelete}
        >
          삭제
        </RedButton>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
      </S.BtnBox>
    </S.ProjectDeleteContainer>
  );
};

export default ProjectDeleteModal;
