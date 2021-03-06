import { useInfiniteQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { List } from "../hooks/usePagination";
import Page from "../interface/Page";
import { Project } from "../utils/api/Feed";
import { getSearch, getSearchEach, SearchBy, SearchList } from "../utils/api/Search";

export const useSearch = (keyword: string, initPage: number) => {
  return useInfiniteQuery(
    [queryKeys.search, keyword],
    async ({ pageParam = initPage }) => {
      const { data } = await getSearch(keyword, pageParam);

      const p: Page<SearchList> = {
        page: pageParam,
        data: data,
      };

      return p;
    },
    {
      enabled: !!keyword,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
};

export const useSearchEach = (keyword: string, by: SearchBy, initPage: number) => {
  return useInfiniteQuery(
    [queryKeys.searchEach, keyword, by],
    async ({ pageParam = initPage + 1 }) => {
      const { data } = await getSearchEach(keyword, pageParam, by);

      const p: Page<List<Project>> = {
        data: { list: data[by].projects, count: data[by].count },
        page: pageParam,
      };

      return p;
    },
    { getNextPageParam: (last) => last.page + 1, keepPreviousData: true, enabled: false }
  );
};
