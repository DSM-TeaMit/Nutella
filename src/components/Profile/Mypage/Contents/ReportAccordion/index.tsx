import * as S from "./styles";
import { UpArrowIcons } from "../../../../../assets/icons";
import ReportCard from "../../../../Cards/ReportCard";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reports, UserReports } from "../../../../../utils/api/User";
import { ReportStatus, ReportPathType } from "../../../../../interface";
import isMore from "../../../../../constant/IsMore";
import { useEachReports } from "../../../../../queries/User";
import LIMIT from "../../../../../constant/Limit";

interface PropsType {
  title: string;
  data: Reports;
  status: ReportStatus;
  userUuid?: string;
  value?: boolean;
}

const padding = 12 as const;
const gap = 16 as const;

const pathMap = new Map<ReportStatus, ReportPathType>()
  .set("PENDING", "pending")
  .set("ACCEPTED", "accepted")
  .set("DECLINED", "rejected")
  .set("WRITING", "writing");

const ReportAccordion: FC<PropsType> = ({
  title,
  data,
  status,
  userUuid,
  value,
}) => {
  const [isActive, setIsActive] = useState<boolean>(value || false);
  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const initPage = 1;
  const pathType = useMemo(() => pathMap.get(status)!, [status]);

  const { count, projects: reports } = data;

  const {
    data: eachData,
    isFetching,
    fetchNextPage,
  } = useEachReports(pathType, initPage, userUuid);
  const [page, setPage] = useState<number>(
    Number(
      eachData && eachData.pageParams.length > 0
        ? eachData.pageParams[eachData.pageParams.length - 1]
        : initPage
    )
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
    setPage((prev) => prev + 1);
    fetchNextPage();
  }, [fetchNextPage]);

  const list = useMemo(() => {
    if (!eachData) {
      return undefined;
    }

    const l: UserReports = {
      writing: { projects: [], count: 0 },
      accepted: { projects: [], count: 0 },
      pending: { projects: [], count: 0 },
      rejected: { projects: [], count: 0 },
    };

    eachData.pages.forEach((value) => {
      for (const key in value.data) {
        const k = key as keyof UserReports;
        l[k].projects.push(...value.data[k].projects);
        l[k].count = value.data[k].count;
      }
    });

    return l;
  }, [eachData]);

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
            <ReportCard
              key={`${value.uuid}_${value.type}`}
              data={{ ...value, status }}
            />
          ))}
          {list &&
            list[pathType].projects.map((value) => (
              <ReportCard
                key={`${value.uuid}_${value.type}`}
                data={{ ...value, status }}
              />
            ))}
        </S.Grid>
        {!isFetching && isMore(LIMIT, page, count) && (
          <S.More onClick={onMore}>더 가져오기</S.More>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};

export default ReportAccordion;
