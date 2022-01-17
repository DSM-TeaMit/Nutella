import * as S from "./styles";
import Arrow from "../../../../assets/icons/up_arrow.svg";
import ReportCard from "../../../ReportCard";
import { useEffect, useRef, useState } from "react";

const ReportAccordion = () => {
  const [isActive, setIsActive] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);

  const padding = 12;

  useEffect(() => {
    if (container.current && header.current) {
      if (isActive) {
        container.current.style.height = "unset";
      } else {
        container.current.style.height = `${header.current.offsetHeight + padding * 2}px`;
      }
    }
  }, [isActive]);

  return (
    <S.Container ref={container}>
      <div ref={header}>
        <S.HeaderContainer onClick={() => setIsActive(!isActive)}>
          <div>
            <S.Title>승인 대기중인 보고서&nbsp;</S.Title>
            <S.Count>12</S.Count>
          </div>
          <img
            style={{
              transform: `rotate(${isActive ? 0 : 180}deg)`,
            }}
            alt="arrow"
            src={Arrow}
          />
        </S.HeaderContainer>
      </div>
      <S.ContentContainer>
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </S.ContentContainer>
    </S.Container>
  );
};

export default ReportAccordion;
