import { Fragment } from "react";
import * as S from "./styles";

const TopSkeleton = () => {
  return (
    <Fragment>
      <S.TopContainer>
        <S.TopContent>
          <S.ProjectImgBox></S.ProjectImgBox>
          <div>
            <S.ProjectTop>
              <S.ProjectName />
              <S.ProjectRincian>
                <S.ViewBox />
                <S.IconBox />
                <S.ModifyBox />
              </S.ProjectRincian>
            </S.ProjectTop>
            <S.ProjectContent />
            <S.ProjectBottom>
              <div>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <S.Field key={index} />
                  ))}
              </div>
              <S.Step />
            </S.ProjectBottom>
          </div>
        </S.TopContent>
      </S.TopContainer>
    </Fragment>
  );
};

export default TopSkeleton;
