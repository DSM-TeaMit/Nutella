import { useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getSearch, getSearchType } from "../utils/api/Search";

export const useSearch = (keyword: string) => {
  return useQuery([queryKeys.search, keyword], () => getSearch(keyword), {
    enabled: !!keyword,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const useSearchType = (
  page: number,
  keyword: string,
  searchType: string
) => {
  return useQuery([queryKeys.searchType], () =>
    getSearchType(page, keyword, searchType)
  );
};
