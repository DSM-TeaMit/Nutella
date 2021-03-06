import { useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getImage } from "../utils/api/Image";

export const useImage = (src: string) =>
  useQuery([queryKeys.image, src], () => getImage(src), {
    retry: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
