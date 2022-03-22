import * as S from "./styles";
import { TeamIcons, PersonalIcons, ClubIcons } from "../../../assets/icons";
import { ProjectType } from "../../../utils/api/User";
import { FC, useCallback } from "react";
import ProjectTypes from "../../../interface/ProjectTypes";
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

  return (
    <S.Container to={`/project/${uuid}`}>
      <S.Image alt="project image" src={thumbnailUrl} emoji={emoji} />
      <S.InfoContainer>
        <div>
          <S.TitleContaienr>
            <S.Title>{projectName}</S.Title>
            <S.TypeIcon alt="type icon" src={iconMap.get(projectType)!} />
          </S.TitleContaienr>
          {projectDescription === null ? (
            <S.Description>설명이 없습니다.</S.Description>
          ) : (
            <S.Description>{projectDescription}</S.Description>
          )}
        </div>
        <S.BottonContainer>
          <S.UserContainer>
            <S.UserImageContainer>
              {members.slice(0, 3).map((value) => (
                <S.UserImageOuter key={value.uuid}>
                  <S.UserImage
                    src={value.thumbnailUrl}
                    onClick={onMemberClick(uuid)}
                  />
                </S.UserImageOuter>
              ))}
            </S.UserImageContainer>
            {members.length > 3 && (
              <S.UserAdditional>+{members.length - 3}</S.UserAdditional>
            )}
          </S.UserContainer>
          <div>
            <S.Type>{fields.split(",").slice(0, 3).join(" · ")}&nbsp;</S.Type>
            {fields.length > 3 && (
              <S.TypeAdditional>+{fields.length - 3}</S.TypeAdditional>
            )}
          </div>
        </S.BottonContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ProjectCard;
