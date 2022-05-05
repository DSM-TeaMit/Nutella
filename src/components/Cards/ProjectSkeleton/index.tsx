import { memo } from "react";
import * as S from "./styles";

const ProjectSkeleton = () => {
  return (
    <S.Container>
      <S.Image />
      <S.InfoContainer>
        <div>
          <S.TitleContaienr>
            <S.Title>123123123</S.Title>
            <S.Icon />
          </S.TitleContaienr>
          <S.DescriptionContainer>
            <div>
              <S.Description>12312312103819830123983</S.Description>
            </div>
            <div>
              <S.Description>1212331</S.Description>
            </div>
          </S.DescriptionContainer>
        </div>
        <S.BottonContainer>
          <S.UserContainer>
            <S.UserImageContainer>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <S.UserImageOuter key={index}>
                    <S.UserImage />
                  </S.UserImageOuter>
                ))}
            </S.UserImageContainer>
          </S.UserContainer>
          <div>
            <S.Type>123123123 &nbsp;</S.Type>
          </div>
        </S.BottonContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

export default memo(ProjectSkeleton);
