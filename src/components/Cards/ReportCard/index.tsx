import { FC } from "react";
import useThemeContext from "../../../hooks/useThemeContext";
import { ReportStatus } from "../../../interface/Report";
import { ReportType } from "../../../utils/api/User";
import * as S from "./styles";

interface PropsType {
  data: ReportType;
}

const ReportCard: FC<PropsType> = ({ data }) => {
  const { uuid, projectName, type, status, thumbnailUrl, emoji } = data;
  const theme = useThemeContext();

  const colorMap = new Map<ReportStatus, string>()
    .set("ACCEPTED", theme.colors.green.default)
    .set("PENDING", theme.colors.grayscale.gray2)
    .set("DECLINED", theme.colors.red.default)
    .set("WRITING", theme.colors.grayscale.gray2);

  const messageMap = new Map<ReportStatus, string>()
    .set("ACCEPTED", "승인 됨")
    .set("PENDING", "승인 대기중")
    .set("DECLINED", "승인 거부됨")
    .set("WRITING", "작성 중");

  return (
    <S.Container to={`/project/${uuid}/${type === "PLAN" ? "plan" : "result"}`}>
      <S.Image alt="project image" src={thumbnailUrl} emoji={emoji} />
      <S.InfoContainer>
        <S.TitleContaienr>
          <S.Title>{projectName}</S.Title>
          <S.Description>
            · {type === "PLAN" ? "계획서" : "결과 보고서"}
          </S.Description>
        </S.TitleContaienr>
        <S.Description color={colorMap.get(status)}>
          {messageMap.get(status)}
        </S.Description>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ReportCard;
