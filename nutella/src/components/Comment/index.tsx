import { FC, useState } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import CommentStyleType from "../../interface/CommentStyleType";
import { CommentType } from "../../utils/api/Comment";
import * as S from "./styles";
import { MoreIcons } from "../../assets/icons";

interface PropsType {
  type: CommentStyleType;
  data: CommentType;
}

const Comment: FC<PropsType> = ({ type, data }) => {
  const themeContext = useThemeContext();
  const { content, writerName, writerSno, writerType, uuid, writerId } = data;
  const [isMore, setIsMore] = useState<boolean>(false);

  const bgColorMap = new Map<CommentStyleType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  return (
    <S.Container>
      <S.Image />
      <S.ContentContainer
        color={bgColorMap.get(type)}
        borderWidth={type === "project" ? 0 : 1}
      >
        <S.NameContainer>
          <S.Name>
            {writerSno} {writerName} {writerType === "admin" && "선생님"}
          </S.Name>
          <S.MoreContainer>
            <S.More onClick={() => setIsMore(!isMore)}>
              <S.Icon src={MoreIcons} alt="more" />
            </S.More>
            {isMore && <S.DeletePopup />}
          </S.MoreContainer>
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
