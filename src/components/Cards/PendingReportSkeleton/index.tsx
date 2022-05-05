import { memo } from "react";
import * as S from "./styles";

const PendingReportSkeleton = () => {
  return (
    <S.Container>
      <S.Image />
      <S.ContentContainer>
        <S.TopContainer>
          <div>
            <S.Title>123123123</S.Title>
            <S.Type>·1231231</S.Type>
          </div>
          <S.Gray>123123</S.Gray>
        </S.TopContainer>
        <S.BottomContainer>
          <S.Scale>
            <S.ScaleIcon />
            <S.ScaleLabel>123123123</S.ScaleLabel>
          </S.Scale>
          <S.Gray>123123123123</S.Gray>
        </S.BottomContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default memo(PendingReportSkeleton);
