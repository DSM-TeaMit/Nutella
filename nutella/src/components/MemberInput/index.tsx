import { useEffect, useRef, useState } from "react";
import Member from "./Member";
import * as S from "./styles";

const MemberInput = () => {
  const [isFocus, setIsFocus] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const gap = 12;
  const padding = 16;

  useEffect(() => {
    if (innerRef.current && descriptionRef.current && containerRef.current) {
      containerRef.current.style.height = `${
        innerRef.current.offsetHeight + descriptionRef.current.offsetHeight + gap + padding * 2 + 2
      }px`;
    }
  }, []);

  return (
    <S.Container>
      <S.InputStyle
        placeholder="학번 또는 이름으로 유저 검색..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <S.Line />
      {isFocus && (
        <S.UserContainer ref={containerRef}>
          <S.Description ref={descriptionRef}>검색된 유저</S.Description>
          <S.UserInner ref={innerRef}>
            <Member />
            <Member />
            <Member />
            <Member />
          </S.UserInner>
        </S.UserContainer>
      )}
    </S.Container>
  );
};

export default MemberInput;
