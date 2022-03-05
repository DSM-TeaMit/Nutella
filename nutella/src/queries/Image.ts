import { useQuery } from "react-query";
import { getImage } from "../utils/api/Image";

export const useImage = (src: string) =>
  useQuery(["image", src], () => getImage(src), {
    retry: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
