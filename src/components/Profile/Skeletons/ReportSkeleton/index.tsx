import ReportSkeleton from "../../../Cards/ReportSkeleton";
import * as S from "./styles";

const ReportListSkleton = () => {
  return (
    <S.ContentInner>
      <S.FlexContainer>
        <span>
          <S.Title>1231231231212312312</S.Title>
        </span>
        <S.Grid>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <ReportSkeleton key={index} />
            ))}
        </S.Grid>
      </S.FlexContainer>
    </S.ContentInner>
  );
};

export default ReportListSkleton;
