import * as S from "./styles";
import { UpArrowIcons } from "../../../../../assets/icons";
import ReportCard from "../../../../Cards/ReportCard";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reports } from "../../../../../utils/api/User";
import { ReportStatus } from "../../../../../interface";
import isMore from "../../../../../constant/IsMore";
import { useEachReports } from "../../../../../queries/User";
import LIMIT from "../../../../../constant/Limit";
import usePagination from "../../../../../hooks/usePagination";
import ReportSkeleton from "../../../../Cards/ReportSkeleton";

interface PropsType {
  title: string;
  data: Reports;
  status: ReportStatus;
  userUuid?: string;
  value?: boolean;
}

const padding = 12 as const;
const gap = 16 as const;

const ReportAccordion: FC<PropsType> = ({ title, data, status, userUuid, value }) => {
  const [isActive, setIsActive] = useState<boolean>(value || false);
  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const initPage = 1;
  const { count, reports } = data;

  const {
    data: eachData,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useEachReports(status, initPage, userUuid);
  const { list, prevPage } = usePagination(eachData, initPage);

  const [page, setPage] = useState<number>(prevPage);

  const onMore = useCallback(() => {
    setPage((prev) => prev + 1);
    fetchNextPage();
  }, [fetchNextPage]);

  const more = useMemo(() => isMore(LIMIT, page, count), [count, page]);

  useEffect(() => {
    if (container.current && header.current && content.current) {
      if (isActive) {
        container.current.style.height = `${
          header.current.offsetHeight + content.current.offsetHeight + gap + padding * 2
        }px `;
      } else {
        container.current.style.height = `${header.current.offsetHeight + padding * 2}px`;
      }
    }
  }, [isActive, more, isFetchingNextPage]);

  const skeleton = useMemo(
    () =>
      Array(3)
        .fill(0)
        .map((_, index) => <ReportSkeleton key={index} />),
    []
  );

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
            <ReportCard key={`${value.uuid}_${value.type}`} data={{ ...value, status }} />
          ))}
          {list &&
            list.map((value) => (
              <ReportCard key={`${value.uuid}_${value.type}`} data={{ ...value, status }} />
            ))}
          {isFetchingNextPage && skeleton}
        </S.Grid>
        {!isFetching && more && <S.More onClick={onMore}>더 가져오기</S.More>}
      </S.ContentContainer>
    </S.Container>
  );
};

export default ReportAccordion;
