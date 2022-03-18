import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../constant/QueryKeys";
import CommentSource from "../interface/CommentSource";
import {
  deleteComment,
  getComment,
  postComment,
  PostComment,
} from "../utils/api/Comment";

export const useComment = (projectUuid: string, type: CommentSource) =>
  useQuery([queryKeys.comment, projectUuid, type], () =>
    getComment(projectUuid, type)
  );

export const useCommentMutation = (projectUuid: string) => {
  const queryClient = useQueryClient();

  return useMutation((data: PostComment) => postComment(projectUuid, data), {
    onSuccess: (_, variables) => {
      toast.success("댓글 작성 완료.");
      queryClient.invalidateQueries([
        queryKeys.comment,
        projectUuid,
        variables.type,
      ]);
    },
    onError: () => {
      toast.error("댓글 작성 실패.");
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation((commentUuid: string) => deleteComment(commentUuid), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.comment);
    },
  });
};
