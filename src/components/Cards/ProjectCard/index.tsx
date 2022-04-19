import * as S from "./styles";
import { TeamIcons, PersonalIcons, ClubIcons } from "../../../assets/icons";
import { ProjectType } from "../../../utils/api/User";
import { FC, useCallback, useMemo } from "react";
import { ProjectTypes } from "../../../interface";
import { useNavigate } from "react-router-dom";

interface PropsType {
  data: ProjectType;
}

const ProjectCard: FC<PropsType> = ({ data }) => {
  const navigate = useNavigate();
  const {
    uuid,
    fields,
    members,
    projectDescription,
    projectName,
    projectType,
    thumbnailUrl,
    emoji,
  } = data;

  const iconMap = new Map<ProjectTypes, string>()
    .set("PERS", PersonalIcons)
    .set("TEAM", TeamIcons)
    .set("CLUB", ClubIcons);

  const onMemberClick = useCallback(
    (uuid: string) => (e: React.MouseEvent<HTMLImageElement>) => {
      e.stopPropagation();
      e.preventDefault();

      navigate(`/user/${uuid}`);
    },
    [navigate]
  );

  const fieldList = useMemo(
    () => fields.replace(/\s/g, "").split(","),
    [fields]
  );

  const maxFieldCount = useMemo(() => 3, []);
  const maxMemberCount = useMemo(() => 3, []);

  return (
    <S.Container to={`/project/${uuid}`}>
      <S.Image alt="project image" src={thumbnailUrl} emoji={emoji} />
      <S.InfoContainer>
        <div>
          <S.TitleContaienr>
            <S.Title>{projectName}</S.Title>
            <S.TypeIcon alt="type icon" src={iconMap.get(projectType)!} />
          </S.TitleContaienr>
          {projectDescription === null || projectDescription.length <= 0 ? (
            <S.Description>설명이 없습니다.</S.Description>
          ) : (
            <S.Description>{projectDescription}</S.Description>
          )}
        </div>
        <S.BottonContainer>
          <S.UserContainer>
            <S.UserImageContainer>
              {members.slice(0, maxMemberCount).map((value) => (
                <S.UserImageOuter key={value.uuid}>
                  <S.UserImage
                    src={value.thumbnailUrl}
                    onClick={onMemberClick(value.uuid)}
                    isProfile
                  />
                </S.UserImageOuter>
              ))}
            </S.UserImageContainer>
            {members.length > maxMemberCount && (
              <S.UserAdditional>
                +{members.length - maxMemberCount}
              </S.UserAdditional>
            )}
          </S.UserContainer>
          <S.TypeContainer>
            <S.Type>
              {fieldList.slice(0, maxFieldCount).join(" · ")}
              &nbsp;
            </S.Type>
            {fieldList.length > maxFieldCount && (
              <S.TypeAdditional>
                +{fieldList.length - maxFieldCount}
              </S.TypeAdditional>
            )}
          </S.TypeContainer>
        </S.BottonContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ProjectCard;
