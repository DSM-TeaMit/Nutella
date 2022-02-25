import { useMutation, useQuery } from "react-query";
import { getImage, postImage } from "../utils/api/Image";

export const useImageMutation = (projectUuid: string) =>
  useMutation((file: File) => postImage(file, projectUuid));

export const useImage = (src: string) =>
  useQuery(["image", src], () => getImage(src));
