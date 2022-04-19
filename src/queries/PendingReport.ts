import { useInfiniteQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import Page from "../interface/Page";
import {
  getPendingReports,
  PendingReportList,
} from "../utils/api/PendingReport";

export const usePendingReport = (initPage: number) =>
  useInfiniteQuery(
    [queryKeys.pendingReport],
    async ({ pageParam = initPage }) => {
      const data = await getPendingReports(pageParam);

      const p: Page<PendingReportList> = {
        page: pageParam,
        data: data.data,
      };

      return p;
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
