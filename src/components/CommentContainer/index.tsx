import { FC, useEffect } from "react";
import toast from "react-hot-toast";
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
  const { data, isError, isLoading } = useComment(uuid, source);

  useEffect(() => {
    if (isError) {
      toast.error("댓글을 가져오는 중 오류가 발생했습니다.");
    }
  }, [isError]);

  return (
    <S.CommentContainer>
      <div>
        <S.CommentTitle>댓글&nbsp;{isLoading && "로딩중..."}</S.CommentTitle>
        {data && <S.CommentTitleBlue>{data?.data.count}개</S.CommentTitleBlue>}
      </div>
      <CommentInput uuid={uuid} type={styleType} source={source} />
      {data?.data.comments.map((value) => (
        <Comment type={styleType} key={value.uuid} data={value} />
      ))}
      {isLoading && <S.Message>댓글을 가져오는 중...</S.Message>}
      {isError && <S.Message>댓글을 가져오는 중 오류 발생.</S.Message>}
    </S.CommentContainer>
  );
};

export default CommentContainer;
