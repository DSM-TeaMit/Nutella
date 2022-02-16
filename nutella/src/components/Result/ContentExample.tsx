import { FC } from "react";
import * as S from "./styles";

const ContentExample: FC = () => {
  return (
    <S.ContentContainer>
      <S.ContentInner>
        <S.ContentPadding>
          <S.ExampleDiv>
            <div>*보고서 작성 요령</div>
            <br />
            <br />
            <div>Ⅰ. 프로젝트 실행 동기 및 목적</div>
            <div style={{ marginLeft: `${1.2}rem` }}>1.</div>
            <div style={{ marginLeft: `${1.2 * 2}rem` }}>가.</div>
            <div style={{ marginLeft: `${1.2 * 3}rem` }}>1)</div>
            <div style={{ marginLeft: `${1.2 * 4}rem` }}>가)</div>
            <br />
            <br />
            <div>II. 이론적 배경 (기존 사례 또는 문헌 연구 결과)</div>
            <br />
            <br />
            <div>III. 프로젝트 방법 및 과정</div>
            <br />
            <br />
            <div>IV. 프로젝트 결과</div>
            <br />
            <br />
            <div>Ⅴ. 결론 및 고찰</div>
            <br />
            <br />
            <div>▣ 참고문헌</div>
            <br />
            <br />
            <div>※ 위 작성 요령에 준하여 작성, A4 10매 내외 작성</div>
          </S.ExampleDiv>
        </S.ContentPadding>
      </S.ContentInner>
    </S.ContentContainer>
  );
};

export default ContentExample;
