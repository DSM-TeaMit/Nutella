import { useQuery } from "react-query";
import { getFeed } from "../utils/api/Feed";
import queryKeys from "../constant/QueryKeys";

export const useFeed = (order: string, page: number) => {
  return useQuery([queryKeys.feed], () => getFeed(order, page));
};
