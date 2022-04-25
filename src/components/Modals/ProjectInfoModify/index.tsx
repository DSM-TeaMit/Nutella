import { FC, Fragment, useRef, useState } from "react";
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
import { useProjectDetails } from "../../../queries/ProjectDetails";
import { useParams } from "react-router-dom";

interface PropsType {
  onDeleteProject: () => void;
}

const ProjectModifyModal: FC<PropsType> = ({ onDeleteProject }) => {
  const { closeCurrentModal } = useModalContext();
  const ref = useRef<HTMLTextAreaElement>(null);
  const modalRef = useModalRef();
  const [inputProps] = useTagInput("", [], true);
  const { uuid } = useParams<{ uuid: string }>();
  const { data } = useProjectDetails(uuid || "");
  const [projectName, setProjectName] = useState(data?.data.projectName);
  const [projectInfo, setProjectInfo] = useState(data?.data.projectResult);
  //const modifyProjectInfoMutation = useModifyProjectInfo();

  return (
    <Fragment>
      <S.ProjectModifyModalContainer>
        <S.Title>프로젝트 정보 수정</S.Title>
        <S.ContentBox>
          <S.Content>
            <S.SubTitle>프로젝트 이름</S.SubTitle>
            <Input
              defaultValue={data?.data.projectName}
              placeholder="프로젝트 이름을 입력해 주세요..."
              onChange={(e) => setProjectName(e.target.value)}
            />
          </S.Content>
          <S.Content>
            <S.SubTitle>프로젝트 설명</S.SubTitle>
            <TextareaAutosize
              minRows={1}
              maxRows={4}
              placeholder={
                data?.data.projectResult === null
                  ? "프로젝트 소개를 작성해 주세요."
                  : undefined
              }
              defaultValue={data?.data.projectResult}
              onChange={(e) => setProjectInfo(e.target.value)}
            />
          </S.Content>
          <S.Content>
            <S.SubTitle>프로젝트 분야</S.SubTitle>
            <S.FiedBox>
              <S.TagBox>
                {data?.data.projectField.split(",").map((item, index) => {
                  return <S.Tag>{item}</S.Tag>;
                })}
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
