import { FC } from "react";
import CommentSource from "../../interface/CommentSource";
import CommentStyleType from "../../interface/CommentStyleType";
import { useComment } from "../../queries/Comment";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import * as S from "./styles";

interface PropsType {
  styleType: CommentStyleType;
  source: CommentSource;
  uuid: string;
}

const CommentContainer: FC<PropsType> = ({ styleType, uuid, source }) => {
  const { data } = useComment(uuid, source);

  return (
    <S.CommentContainer>
      <div>
        <S.CommentTitle>댓글&nbsp;</S.CommentTitle>
        <S.CommentTitleBlue>{data?.data.count}개</S.CommentTitleBlue>
      </div>
      <CommentInput uuid={uuid} type={styleType} source={source} />
      {data?.data.comments.map((value) => (
        <Comment type={styleType} key={value.uuid} data={value} />
      ))}
    </S.CommentContainer>
  );
};

export default CommentContainer;
