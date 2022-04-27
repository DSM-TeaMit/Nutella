import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useThemeContext from "../../hooks/useThemeContext";
import { CommentSource, CommentStyleType } from "../../interface";
import { useCommentMutation } from "../../queries/Comment";
import { useHeader } from "../../queries/User";
import { BlueButton } from "../Buttons";
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
  const { data, isLoading, isError } = useHeader();

  const bgColorMap = new Map<CommentStyleType, string>()
    .set("project", themeContext.colors.grayscale.lightGray1)
    .set("report", themeContext.colors.grayscale.white);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value),
    []
  );

  const onSubmitEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (input === "") {
        toast.error("댓글을 작성해 주세요.");
        e.preventDefault();
      } else if (!e.shiftKey && e.key === "Enter") {
        setInput("");
        e.preventDefault();
        commentMutation.mutate({ content: input, type: source });
      }
    },
    [commentMutation, input, source]
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

    if (data?.data.type === "admin") {
      return `${data?.data.name} 선생님(으)로 댓글 달기`;
    }

    return `${data?.data.studentNo} ${data?.data.name}(으)로 댓글 달기`;
  }, [data, isError, isLoading]);

  useEffect(() => {
    if (isError) {
      toast.error("댓글 유저 정보를 가져오는 중 오류가 발생했습니다.");
    }
  }, [isError]);

  return (
    <S.Container>
      <S.Image
        isProfile
        src={data?.data.thumbnailUrl}
        emoji={data?.data.emoji}
      />
      <S.Input
        color={bgColorMap.get(type)}
        border={type === "project" ? 0 : 1}
        placeholder={placeholder}
        onChange={onChange}
        value={input}
        onKeyPress={(e) => onSubmitEnter(e)}
      />
      <BlueButton disabled={input.length === 0} onClick={onSubmitClick}>
        댓글 달기
      </BlueButton>
    </S.Container>
  );
};

export default CommentInput;
