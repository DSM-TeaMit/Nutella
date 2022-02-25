import { useQuery } from "react-query";
import { getImage } from "../utils/api/Image";

export const useImage = (src: string) =>
  useQuery(["image", src], () => getImage(src));
