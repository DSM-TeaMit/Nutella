import useInput from "../../../hooks/useInput";
import useTagInput from "../../../hooks/useTagInput";
import Input from "../../Input";
import TagInput from "../../TagInput";
import * as S from "./styles";

const ProjectAddModal = () => {
  const [inputProps] = useTagInput("", [], true);

  return (
    <S.Container>
      <S.Inner>
        <S.Title>프로젝트 생성</S.Title>
        <S.ContentContainer>
          <S.Subtitle>프로젝트 이름</S.Subtitle>
          <Input placeholder="프로젝트 이름을 입력해주세요..." />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>프로젝트 분야</S.Subtitle>
          <TagInput placeholder="프로젝트 분야를 입력해주세요..." {...inputProps} />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>멤버</S.Subtitle>
          <Input placeholder="학번 또는 이름으로 유저 검색..." />
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default ProjectAddModal;
