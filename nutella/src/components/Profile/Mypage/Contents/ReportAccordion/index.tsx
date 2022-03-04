import * as S from "./styles";
import { UpArrowIcons } from "../../../../../assets/icons";
import ReportCard from "../../../../ReportCard";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LIMIT, Reports } from "../../../../../utils/api/User";
import { ReportStatus } from "../../../../../interface/Report";
import isMore from "../../../../../constant/IsMore";
import ReportPathType from "../../../../../interface/ReportPathType";
import { useEachReports } from "../../../../../queries/User";

interface PropsType {
  title: string;
  data: Reports;
  status: ReportStatus;
  userUuid?: string;
}

const padding = 12 as const;
const gap = 16 as const;

const pathMap = new Map<ReportStatus, ReportPathType>()
  .set("PENDING", "pending")
  .set("ACCEPTED", "accepted")
  .set("DECLINED", "rejected");

const ReportAccordion: FC<PropsType> = ({ title, data, status, userUuid }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(2);
  const [queryEnabled, setQueryEnabled] = useState<boolean>(false);
  const pathType = useMemo(() => pathMap.get(status)!, [status]);

  const { count, projects: reports } = data;

  const { data: eachData } = useEachReports(
    pathType,
    page,
    queryEnabled,
    userUuid
  );

  useEffect(() => {
    if (container.current && header.current && content.current) {
      if (isActive) {
        container.current.style.height = `${
          header.current.offsetHeight +
          content.current.offsetHeight +
          gap +
          padding * 2
        }px `;
      } else {
        container.current.style.height = `${
          header.current.offsetHeight + padding * 2
        }px`;
      }
    }
  }, [isActive]);

  const onMore = useCallback(() => {
    if (!queryEnabled) {
      setQueryEnabled(true);
      return;
    }

    setPage((prev) => prev + 1);
  }, [queryEnabled]);

  return (
    <S.Container ref={container}>
      <div ref={header}>
        <S.HeaderContainer onClick={() => setIsActive(!isActive)}>
          <div>
            <S.Title>{title} 보고서&nbsp;</S.Title>
            <S.Count>{count}</S.Count>
          </div>
          <img
            style={{
              transform: `rotate(${isActive ? 0 : 180}deg)`,
            }}
            alt="arrow"
            src={UpArrowIcons}
          />
        </S.HeaderContainer>
      </div>
      <S.ContentContainer isActive={isActive} ref={content}>
        <S.Grid>
          {reports.map((value) => (
            <ReportCard key={value.uuid} data={{ ...value, status }} />
          ))}
          {eachData?.data[pathType].projects.map((value) => {
            <ReportCard key={value.uuid} data={{ ...value, status }} />;
          })}
        </S.Grid>
        {isMore(LIMIT, page, count) && (
          <S.More onClick={onMore}>더 가져오기</S.More>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};

export default ReportAccordion;
