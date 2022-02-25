import { useMutation } from "react-query";
import { postImage } from "../utils/api/Image";

export const useImageMutation = (projectUuid: string) =>
  useMutation((file: File) => postImage(file, projectUuid));
