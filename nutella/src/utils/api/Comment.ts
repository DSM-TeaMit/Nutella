import Uri from "../../constant/Uri";
import CommentSource from "../../interface/CommentSource";
import request from "../axios";

interface CommentType {
  uuid: string;
  writerId: string;
  writerType: string;
  writerName: string;
  writerSno: number;
  content: string;
}

interface CommentList {
  count: number;
  comments: CommentType[];
}

export const getComment = async (projectUuid: string, type: CommentSource) => {
  const uri = Uri.projectComment.get({ projectUuid });

  return await request.get<CommentList>(uri, { params: { type } });
};
