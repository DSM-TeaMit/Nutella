import { FC } from "react";
import { ReportType } from "../../utils/api/User";
import * as S from "./styles";

interface PropsType {
  data: ReportType;
}

const ReportCard: FC<PropsType> = ({ data }) => {
  const { uuid, projectName, type, status, thumbnailUrl } = data;

  return (
    <S.Container to={`/project/${uuid}/plan`}>
      <S.Image alt="project image" src={thumbnailUrl} />
      <S.InfoContainer>
        <S.TitleContaienr>
          <S.Title>{projectName}</S.Title>
          <S.Description>
            · {type === "PLAN" ? "계획서" : "결과 보고서"}
          </S.Description>
        </S.TitleContaienr>
        <S.Description status={status}>
          {status === "PENDING" ? "승인 대기중" : "승인 거부됨"}
        </S.Description>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ReportCard;
