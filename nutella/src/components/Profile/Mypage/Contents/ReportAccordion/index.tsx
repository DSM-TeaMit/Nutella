import * as S from "./styles";
import { UpArrowIcons } from "../../../../../assets/icons";
import ReportCard from "../../../../ReportCard";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { LIMIT, Reports } from "../../../../../utils/api/User";
import { ReportStatus } from "../../../../../interface/Report";
import isMore from "../../../../../constant/IsMore";
import ReportPathType from "../../../../../interface/ReportPathType";

interface PropsType {
  title: string;
  data: Reports;
  status: ReportStatus;
}

const padding = 12 as const;
const gap = 16 as const;

const pathMap = new Map<ReportStatus, ReportPathType>()
  .set("PENDING", "pending")
  .set("ACCEPTED", "accepted")
  .set("DECLINED", "rejected");

const ReportAccordion: FC<PropsType> = ({ title, data, status }) => {
  const [isActive, setIsActive] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);

  const { count, projects: reports } = data;

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
        </S.Grid>
        {isMore(LIMIT, page, count) && (
          <S.More onClick={() => setPage((prev) => prev + 1)}>
            더 가져오기
          </S.More>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};

export default ReportAccordion;
