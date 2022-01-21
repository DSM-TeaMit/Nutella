import * as S from "./styles";
import { UpArrowIcons } from "../../../../assets/icons";
import ReportCard from "../../../ReportCard";
import { FC, useEffect, useRef, useState } from "react";

interface PropsType {
  title: string;
  count: number;
}

const ReportAccordion: FC<PropsType> = ({ title, count }) => {
  const [isActive, setIsActive] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const padding = 12;
  const gap = 16;

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
        {new Array(5).fill(0).map((_, index) => (
          <ReportCard key={index} />
        ))}
      </S.ContentContainer>
    </S.Container>
  );
};

export default ReportAccordion;
