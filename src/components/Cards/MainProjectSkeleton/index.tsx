import { memo } from "react";
import * as S from "./styles";

const MainProjectSkeleton = () => {
  return (
    <>
      <S.Content>
        <S.ProjectPhoto />
        <S.ProjectBottom>
          <S.InfoContainer>
            <S.ProjectTitle>123123</S.ProjectTitle>
            <S.Icon />
          </S.InfoContainer>
          <S.ProjectInfo>
            <S.Field>123123</S.Field>
            <div>
              <S.Icon />
              <S.Number>123123</S.Number>
            </div>
          </S.ProjectInfo>
        </S.ProjectBottom>
      </S.Content>
    </>
  );
};

export default memo(MainProjectSkeleton);
