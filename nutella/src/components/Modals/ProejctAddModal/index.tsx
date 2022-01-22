import { useState } from "react";
import useTagInput from "../../../hooks/useTagInput";
import Input from "../../Input";
import MemberInput from "../../MemberInput";
import TagInput from "../../TagInput";
import * as S from "./styles";
import {  } from "../../../assets/icons";

interface Type {
  img: string;
  name: string;
  type: string;
}

const ProjectAddModal = () => {
  const [inputProps] = useTagInput("", [], true);
  const [type, setType] = useState<Type>();

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
          <S.Subtitle>프로젝트 종류</S.Subtitle>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>멤버</S.Subtitle>
          <MemberInput />
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default ProjectAddModal;
