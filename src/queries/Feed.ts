import { useInfiniteQuery } from "react-query";
import { getFeed } from "../utils/api/Feed";
import queryKeys from "../constant/QueryKeys";
import Page from "../interface/Page";
import { Feed as FeedType } from "../utils/api/Feed";

export const useFeed = (order: string, initPage: number) => {
  return useInfiniteQuery(
    [queryKeys.feed, order],
    async ({ pageParam = initPage }) => {
      const data = await getFeed(order, pageParam);

      const d: Page<FeedType> = { page: pageParam, data: data.data };

      return d;
    },
    { getNextPageParam: (lastPage) => lastPage.page + 1 }
  );
};
