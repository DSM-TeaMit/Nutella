import { FC, memo, useCallback, useState } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import { CommentStyleType } from "../../interface";
import { CommentType } from "../../utils/api/Comment";
import * as S from "./styles";
import { MoreIcons } from "../../assets/icons";
import { useDeleteComment } from "../../queries/Comment";
import useOuterClick from "../../hooks/useOuterClick";
import { useNavigate } from "react-router-dom";

interface PropsType {
  type: CommentStyleType;
  data: CommentType;
}

const Comment: FC<PropsType> = ({ type, data }) => {
  const themeContext = useThemeContext();
  const { content, writerName, writerSno, writerType, uuid, isMine } = data;
  const [isMore, setIsMore] = useState<boolean>(false);
  const deleteCommentMutation = useDeleteComment();
  const ref = useOuterClick<HTMLButtonElement>(() => setIsMore(false));
  const navigate = useNavigate();

  const bgColorMap = new Map<CommentStyleType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  const onCommentDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();

      deleteCommentMutation.mutate(uuid);
    },
    [deleteCommentMutation, uuid]
  );

  const onMoreClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setIsMore((prev) => !prev);
  }, []);

  const onProfileClick = () => {
    if (writerType === "admin") {
      return;
    }
    navigate(`/user/${data.writerId}`);
  };

  return (
    <S.Container>
      <S.Image isProfile src={data.thumbnailUrl} emoji={data.emoji} onClick={() => onProfileClick()} />
      <S.ContentContainer color={bgColorMap.get(type)} border={type === "project" ? 0 : 1}>
        <S.NameContainer>
          <S.Name>
            {writerSno} {writerName} {writerType === "admin" && "선생님"}
          </S.Name>
          {isMine && (
            <S.MoreContainer>
              <S.More onClick={onMoreClick} className="more-icon">
                <S.Icon src={MoreIcons} alt="more" />
              </S.More>
              {isMore && (
                <S.DeletePopup onClick={onCommentDelete} ref={ref}>
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

export default memo(Comment);
