import { useInfiniteQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { List } from "../hooks/usePagination";
import Page from "../interface/Page";
import { getPendingReports, PendingReport } from "../utils/api/PendingReport";

export const usePendingReport = (initPage: number) =>
  useInfiniteQuery(
    [queryKeys.pendingReport],
    async ({ pageParam = initPage }) => {
      const data = await getPendingReports(pageParam);

      const p: Page<List<PendingReport>> = {
        page: pageParam,
        data: { list: data.data.reports, count: data.data.count },
      };

      return p;
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
