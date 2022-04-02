import * as S from "./styles";
import { ViewIcons, PersonalIcons } from "../../../assets/icons";
import { project } from "../../../utils/api/Feed";
import { FC } from "react";

interface PropsType {
  data: project;
}

const Project: FC<PropsType> = ({ data }) => {
  return (
    <>
      <S.Content to={`/project/${data?.uuid}`}>
        <S.ProjectPhoto
          alt="project image"
          src={data?.thumbnailUrl}
          emoji={data?.emoji}
        />
        <S.ProjectBottom>
          <S.InfoContainer>
            <S.ProjectTitle>{data?.projectName}</S.ProjectTitle>
            <img src={PersonalIcons} />
          </S.InfoContainer>
          <S.ProjectInfo>
            <S.Field>{data?.projectField}</S.Field>
            <div>
              <img src={ViewIcons} />
              <S.Number>{data?.viewCount}</S.Number>
            </div>
          </S.ProjectInfo>
        </S.ProjectBottom>
      </S.Content>
    </>
  );
};

export default Project;
