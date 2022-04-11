import { useCallback, useEffect, useState } from "react";
import useTagInput from "../../../hooks/useTagInput";
import Input from "../../Input";
import MemberInput from "../../MemberInput";
import TagInput from "../../TagInput";
import * as S from "./styles";
import { ClubIcons, PersonalIcons, TeamIcons } from "../../../assets/icons";
import { BlueButton, BorderButton } from "../../Buttons";
import useModalContext from "../../../hooks/useModalContext";
import { SearchedUser } from "../../../utils/api/User";
import MemberWithRole from "../../MemberInput/MemberWithRole";

type Types = "personal" | "team" | "club";

interface Type {
  img: string;
  name: string;
  type: Types;
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
  const { closeCurrentModal } = useModalContext();

  const [inputProps] = useTagInput("", []);
  const [type, setType] = useState<Types>(types[0].type);
  const [name, setName] = useState<string>("");
  const [members, setMembers] = useState<SearchedUser[]>([]);

  const onTypeClick = useCallback((type: Type) => {
    setType(type.type);
  }, []);

  useEffect(() => {
    if (type === "personal") {
      setMembers([]);
    }
  }, [type]);

  return (
    <S.Container>
      <S.Inner>
        <S.Title>프로젝트 생성</S.Title>
        <S.ContentContainer>
          <S.Subtitle>프로젝트 이름</S.Subtitle>
          <Input
            placeholder="프로젝트 이름을 입력해주세요..."
            value={name}
            onChange={(e) =>
              setName(e.target.value.trim().replaceAll(/\s/g, ""))
            }
          />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>프로젝트 분야</S.Subtitle>
          <TagInput
            placeholder="공백으로 분야를 구분할 수 있습니다..."
            {...inputProps}
          />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Subtitle>프로젝트 종류</S.Subtitle>
          <S.TypeContainer>
            {types.map((value, index) => (
              <S.Type
                key={index}
                isActive={value.type === type}
                onClick={() => onTypeClick(value)}
              >
                <img src={value.img} alt={value.type} />
                <span>{value.name}</span>
              </S.Type>
            ))}
          </S.TypeContainer>
        </S.ContentContainer>
        {type !== "personal" && (
          <S.MemberContainer>
            <S.ContentContainer>
              <S.Subtitle>멤버</S.Subtitle>
              <MemberInput
                onUserClick={(user) => setMembers((prev) => [...prev, user])}
              />
            </S.ContentContainer>
            {members.map((value) => (
              <MemberWithRole {...value} key={value.uuid} />
            ))}
          </S.MemberContainer>
        )}
      </S.Inner>
      <S.ButtonContainer>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
        <BlueButton>프로젝트 생성</BlueButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ProjectAddModal;
