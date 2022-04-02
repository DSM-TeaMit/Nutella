import { useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getSearch } from "../utils/api/Search";

export const useSearch = (keyword: string) => {
  return useQuery([queryKeys.search], () => getSearch(keyword));
};
