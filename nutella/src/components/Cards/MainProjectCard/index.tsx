import * as S from "./styles";
import { ViewIcons } from "../../../assets/icons";
import { FeedList } from "../../../utils/api/Feed";
import { FC } from "react";

interface PropsType {
  data: FeedList | undefined;
}

const Project: FC<PropsType> = ({ data }) => {
  return (
    <>
      <S.Content to={`/project/${data?.uuid}`}>
        <S.ProjectPhoto alt="project image" src={data?.thumbnailUrl} />
        <S.ProjectBottom>
          <S.ProjectInfoBox>
            <S.ProjectInfo>
              <S.ProjectTitle>{data?.projectName}</S.ProjectTitle>
              <img src={data?.emoji} />
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
