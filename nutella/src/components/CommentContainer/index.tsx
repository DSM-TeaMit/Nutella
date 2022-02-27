import { FC } from "react";
import CommentType from "../../interface/CommentType";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import * as S from "./styles";

interface PropsType {
  styleType: CommentType;
  status: "project" | "plan" | "report";
}

const CommentContainer: FC<PropsType> = ({ styleType: type }) => {
  return (
    <S.CommentContainer>
      <div>
        <S.CommentTitle>댓글&nbsp;</S.CommentTitle>
        <S.CommentTitleBlue>2개</S.CommentTitleBlue>
      </div>
      <CommentInput type={type} />
      <Comment type={type} />
      <Comment type={type} />
    </S.CommentContainer>
  );
};

export default CommentContainer;
