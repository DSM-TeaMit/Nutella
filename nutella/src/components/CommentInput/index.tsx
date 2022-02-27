import { ChangeEvent, FC, useCallback, useState } from "react";
import useMessageContext from "../../hooks/useMessageContext";
import useThemeContext from "../../hooks/useThemeContext";
import CommentSource from "../../interface/CommentSource";
import CommentStyleType from "../../interface/CommentStyleType";
import { useCommentMutation } from "../../queries/Comment";
import { useMyProfile } from "../../queries/User";
import BlueButton from "../Buttons/BlueButton";
import * as S from "./styles";

interface PropsType {
  type: CommentStyleType;
  source: CommentSource;
  uuid: string;
}

const CommentInput: FC<PropsType> = ({ type, uuid, source }) => {
  const themeContext = useThemeContext();
  const commentMutation = useCommentMutation(uuid);
  const [input, setInput] = useState<string>("");
  const { data } = useMyProfile("e973c27b-3e0e-4863-86be-b2e0dfd24908");
  const { showMessage } = useMessageContext();

  const bgColorMap = new Map<CommentStyleType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value),
    []
  );

  const onSubmitSuccess = useCallback(() => {
    setInput("");

    showMessage({
      type: "Positive",
      title: "댓글 작성 완료",
      content: "댓글 작성이 완료되었습니다.",
    });
  }, [showMessage]);

  const onSubmitClick = useCallback(() => {
    commentMutation.mutate(
      { content: input, type: source },
      { onSuccess: onSubmitSuccess }
    );
  }, [onSubmitSuccess, input, source, commentMutation]);

  return (
    <S.Container>
      <S.Image />
      <S.Input
        color={bgColorMap.get(type)}
        borderWidth={type === "project" ? 0 : 1}
        placeholder={`${data?.data.studentNo} ${data?.data.name} (으)로 댓글 달기`}
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
