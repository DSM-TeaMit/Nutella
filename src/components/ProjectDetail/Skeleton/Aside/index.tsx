import { Fragment } from "react";
import * as S from "./styles";

const AsideSkeleton = () => {
  return (
    <Fragment>
      <S.AsideContainer>
        <S.AsideTop>
          <S.Title />
          <S.SubTitle />
        </S.AsideTop>
        <S.AsideContent>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <S.RoleBox key={index}>
                <S.RoleTitle />
                <S.User>
                  <div />
                  <div></div>
                </S.User>
              </S.RoleBox>
            ))}
        </S.AsideContent>
      </S.AsideContainer>
    </Fragment>
  );
};

export default AsideSkeleton;
