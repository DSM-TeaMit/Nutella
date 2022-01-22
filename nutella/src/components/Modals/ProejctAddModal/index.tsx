import { useState } from "react";
import useTagInput from "../../../hooks/useTagInput";
import Input from "../../Input";
import MemberInput from "../../MemberInput";
import TagInput from "../../TagInput";
import * as S from "./styles";
import { ClubIcons, PersonalIcons, TeamIcons } from "../../../assets/icons";

interface Type {
  img: string;
  name: string;
  type: string;
}

const types: Type[] = [
  {
    img: PersonalIcons,
    name: "개인",
    type: "personal",
  },
  {
    img: TeamIcons,
    name: "팀",
    type: "team",
  },
  {
    img: ClubIcons,
    name: "동아리",
    type: "club",
  },
];

const ProjectAddModal = () => {
  const [inputProps] = useTagInput("", [], true);
  const [type, setType] = useState<Type>(types[0]);

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
          <S.TypeContainer>
            {types.map((value) => (
              <S.Type isActive={value.type === type.type}>
                <img src={value.img} alt={value.type} />
                <span>{value.name}</span>
              </S.Type>
            ))}
          </S.TypeContainer>
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
