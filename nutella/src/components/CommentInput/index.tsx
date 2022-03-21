import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import CommentSource from "../../interface/CommentSource";
import CommentStyleType from "../../interface/CommentStyleType";
import { useCommentMutation } from "../../queries/Comment";
import { useMyProfile } from "../../queries/User";
import BlueButton from "../Buttons/BlueButton";
import * as S from "./styles";
import toast from "react-hot-toast";

interface PropsType {
  type: CommentStyleType;
  source: CommentSource;
  uuid: string;
}

const CommentInput: FC<PropsType> = ({ type, uuid, source }) => {
  const themeContext = useThemeContext();
  const commentMutation = useCommentMutation(uuid);
  const [input, setInput] = useState<string>("");
  const { data, isLoading, isError } = useMyProfile();

  const bgColorMap = new Map<CommentStyleType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value),
    []
  );

  const onSubmitClick = useCallback(() => {
    setInput("");
    commentMutation.mutate({ content: input, type: source });
  }, [commentMutation, input, source]);

  const placeholder: string = useMemo(() => {
    if (isLoading) {
      return "유저 정보를 가져오는중...";
    }

    if (isError) {
      return "정보 오류 발생";
    }

    return `${data?.data.studentNo} ${data?.data.name}(으)로 댓글 달기`;
  }, [data, isError, isLoading]);

  return (
    <S.Container>
      <S.Image />
      <S.Input
        color={bgColorMap.get(type)}
        border={type === "project" ? 0 : 1}
        placeholder={placeholder}
        onChange={onChange}
        value={input}
      />
      <BlueButton disabled={input.length === 0} onClick={onSubmitClick}>
        댓글 달기
      </BlueButton>
    </S.Container>
  );
};

export default CommentInput;
