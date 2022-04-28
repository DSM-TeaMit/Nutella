import { useInfiniteQuery } from "react-query";
import { getFeed, Order, Project } from "../utils/api/Feed";
import queryKeys from "../constant/QueryKeys";
import Page from "../interface/Page";
import { List } from "../hooks/usePagination";

export const useFeed = (order: Order, initPage: number) => {
  return useInfiniteQuery(
    [queryKeys.feed, order],
    async ({ pageParam = initPage }) => {
      const data = await getFeed(order, pageParam);

      const d: Page<List<Project>> = {
        page: pageParam,
        data: { list: data.data.projects, count: data.data.count },
      };

      return d;
    },
    { getNextPageParam: (lastPage) => lastPage.page + 1 }
  );
};
