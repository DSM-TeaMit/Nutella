import { useCallback, useEffect, useMemo, useState } from "react";
import useTagInput from "../../../hooks/useTagInput";
import Input from "../../Input";
import MemberInput from "../../MemberInput";
import TagInput, { Tag } from "../../TagInput";
import * as S from "./styles";
import { ClubIcons, PersonalIcons, TeamIcons } from "../../../assets/icons";
import { BlueButton, BorderButton } from "../../Buttons";
import useModalContext from "../../../hooks/useModalContext";
import { SearchedUser } from "../../../utils/api/User";
import MemberWithRole from "../../MemberInput/MemberWithRole";
import { useCreateProject } from "../../../queries/Project";
import { useQueryClient } from "react-query";
import queryKeys from "../../../constant/QueryKeys";

type Types = "PERS" | "TEAM" | "CLUB";

interface Type {
  img: string;
  name: string;
  type: Types;
}

const types: Type[] = [
  {
    img: PersonalIcons,
    name: "개인",
    type: "PERS",
  },
  {
    img: TeamIcons,
    name: "팀",
    type: "TEAM",
  },
  {
    img: ClubIcons,
    name: "동아리",
    type: "CLUB",
  },
];

export interface UserWithRole {
  tags: Tag[];
}

const ProjectAddModal = () => {
  const { closeCurrentModal } = useModalContext();

  const [inputProps, [tags]] = useTagInput("", []);
  const [roleProps, [roleTags]] = useTagInput("", []);
  const [type, setType] = useState<Types>(types[0].type);
  const [name, setName] = useState<string>("");
  const [members, setMembers] = useState<(SearchedUser & UserWithRole)[]>([]);
  const mutation = useCreateProject();
  const queryClient = useQueryClient();

  const onTypeClick = useCallback((type: Type) => {
    setType(type.type);
  }, []);

  useEffect(() => {
    if (type === "PERS") {
      setMembers([]);
    }
  }, [type]);

  const onRemoveClick = useCallback((uuid: string) => {
    setMembers((prev) => prev.filter((value) => value.uuid !== uuid));
  }, []);

  const canCreate = useMemo<boolean>(() => {
    if (name === "") {
      return false;
    }

    if ([tags, roleTags].some((value) => value.length <= 0)) {
      return false;
    }

    if (type !== "PERS") {
      if (members.length <= 0) {
        return false;
      }

      if (members.some((value) => value.tags.length <= 0)) {
        return false;
      }
    }

    return true;
  }, [members, name, roleTags, tags, type]);

  const onCreateClick = useCallback(async () => {
    closeCurrentModal();

    await mutation.mutateAsync({
      name,
      type,
      field: tags.map((value) => value.value).join(","),
      role: roleTags.map((value) => value.value).join(","),
      members: members.map((value) => ({
        uuid: value.uuid,
        role: value.tags.join(","),
      })),
    });

    queryClient.invalidateQueries([queryKeys.projects]);
  }, [
    closeCurrentModal,
    members,
    mutation,
    name,
    queryClient,
    roleTags,
    tags,
    type,
  ]);

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
          <S.Subtitle>내 역할</S.Subtitle>
          <TagInput
            placeholder="공백으로 역할를 구분할 수 있습니다..."
            {...roleProps}
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
        {type !== "PERS" && (
          <S.MemberContainer>
            <S.ContentContainer>
              <S.Subtitle>멤버</S.Subtitle>
              <MemberInput
                onUserClick={(user) =>
                  setMembers((prev) => [...prev, { ...user, tags: [] }])
                }
              />
            </S.ContentContainer>
            {members.map((value, index) => (
              <MemberWithRole
                onRemoveClick={() => onRemoveClick(value.uuid)}
                {...value}
                setTag={(tags: Tag[]) => {
                  const copy = [...members];
                  copy[index].tags = tags;

                  setMembers(copy);
                }}
                key={value.uuid}
              />
            ))}
          </S.MemberContainer>
        )}
      </S.Inner>
      <S.ButtonContainer>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
        <BlueButton disabled={!canCreate} onClick={onCreateClick}>
          프로젝트 생성
        </BlueButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ProjectAddModal;
