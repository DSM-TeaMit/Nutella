import { FC } from "react";
import CommentSource from "../../interface/CommentSource";
import CommentType from "../../interface/CommentType";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import * as S from "./styles";

interface PropsType {
  styleType: CommentType;
  source: CommentSource;
  uuid: string;
}

const CommentContainer: FC<PropsType> = ({ styleType, uuid, source }) => {
  return (
    <S.CommentContainer>
      <div>
        <S.CommentTitle>댓글&nbsp;</S.CommentTitle>
        <S.CommentTitleBlue>2개</S.CommentTitleBlue>
      </div>
      <CommentInput uuid={uuid} type={styleType} source={source} />
      <Comment type={styleType} />
      <Comment type={styleType} />
    </S.CommentContainer>
  );
};

export default CommentContainer;
