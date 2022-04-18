import { useInfiniteQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import Page from "../interface/Page";
import {
  getPendingReports,
  PendingReportList,
} from "../utils/api/PendingReport";

export const usePendingReport = (page: number) =>
  useInfiniteQuery(
    [queryKeys.pendingReport],
    async ({ pageParam = 0 }) => {
      const data = await getPendingReports(page);

      const p: Page<PendingReportList> = {
        page: pageParam,
        data: data.data,
      };

      return p;
    },
    {
      keepPreviousData: true,
      getNextPageParam: () => {},
    }
  );
