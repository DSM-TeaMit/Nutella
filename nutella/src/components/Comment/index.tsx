import { FC, useCallback, useState } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import CommentStyleType from "../../interface/CommentStyleType";
import { CommentType } from "../../utils/api/Comment";
import * as S from "./styles";
import { MoreIcons } from "../../assets/icons";
import { useDeleteComment } from "../../queries/Comment";
import toast from "react-hot-toast";

interface PropsType {
  type: CommentStyleType;
  data: CommentType;
}

const Comment: FC<PropsType> = ({ type, data }) => {
  const themeContext = useThemeContext();
  const { content, writerName, writerSno, writerType, uuid, writerId } = data;
  const [isMore, setIsMore] = useState<boolean>(false);
  const deleteCommentMutation = useDeleteComment();

  const bgColorMap = new Map<CommentStyleType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  const onCommentDelete = useCallback(() => {
    deleteCommentMutation.mutate(uuid, {
      onSuccess: () => {
        toast.success("댓글 삭제 성공");
      },
    });
  }, [deleteCommentMutation, uuid]);

  return (
    <S.Container>
      <S.Image />
      <S.ContentContainer
        color={bgColorMap.get(type)}
        border={type === "project" ? 0 : 1}
      >
        <S.NameContainer>
          <S.Name>
            {writerSno} {writerName} {writerType === "admin" && "선생님"}
          </S.Name>
          {writerId === "e973c27b-3e0e-4863-86be-b2e0dfd24908" && (
            <S.MoreContainer>
              <S.More onClick={() => setIsMore(!isMore)} className="more-icon">
                <S.Icon src={MoreIcons} alt="more" />
              </S.More>
              {isMore && (
                <S.DeletePopup onClick={onCommentDelete}>
                  댓글 삭제
                </S.DeletePopup>
              )}
            </S.MoreContainer>
          )}
        </S.NameContainer>
        <S.Content>
          {content.split("\n").map((value, index) => (
            <div key={`${value}${index}`}>{value}</div>
          ))}
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Comment;
