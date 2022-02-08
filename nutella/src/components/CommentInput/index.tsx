import { FC } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import CommentType from "../../interface/CommentType";
import BlueButton from "../Buttons/BlueButton";
import * as S from "./styles";

interface PropsType {
  type: CommentType;
}

const CommentInput: FC<PropsType> = ({ type }) => {
  const themeContext = useThemeContext();

  const bgColorMap = new Map<CommentType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  return (
    <S.Container>
      <S.Image />
      <S.Input
        color={bgColorMap.get(type)}
        borderWidth={type === "project" ? 0 : 1}
        placeholder="2105 김진근 (으)로 댓글 달기"
      />
      <BlueButton>댓글 달기</BlueButton>
    </S.Container>
  );
};

export default CommentInput;
