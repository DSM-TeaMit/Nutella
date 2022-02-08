import { FC } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import CommentType from "../../interface/CommentType";
import * as S from "./styles";

interface PropsType {
  type: CommentType;
}

const Comment: FC<PropsType> = ({ type }) => {
  const themeContext = useThemeContext();

  const bgColorMap = new Map<CommentType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  return (
    <S.Container>
      <S.Image />
      <S.ContentContainer color={bgColorMap.get(type)} borderWidth={type === "project" ? 0 : 1}>
        <S.Name>2105 김진근</S.Name>
        <S.Content>
          안녕하세요. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든 국민은 주거의 자유를
          침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한
          영장을 제시하여야 한다.
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Comment;
