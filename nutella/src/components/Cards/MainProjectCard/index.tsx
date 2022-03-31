import * as S from "./styles";
import { ViewIcons, PersonalIcons } from "../../../assets/icons";
import { FeedList } from "../../../utils/api/Feed";
import { FC } from "react";

interface PropsType {
  data: FeedList;
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
          <S.ProjectInfoBox>
            <S.ProjectInfo>
              <S.ProjectTitle>{data?.projectName}</S.ProjectTitle>
              <img src={PersonalIcons} />
            </S.ProjectInfo>
            <S.ProjectInfo>
              <S.Field>{data?.projectField}</S.Field>
              <div>
                <img src={ViewIcons} />
                <S.Number>{data?.viewCount}</S.Number>
              </div>
            </S.ProjectInfo>
          </S.ProjectInfoBox>
        </S.ProjectBottom>
      </S.Content>
    </>
  );
};

export default Project;
