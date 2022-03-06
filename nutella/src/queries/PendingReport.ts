import { useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getPendingReports } from "../utils/api/PendingReport";

export const usePendingReport = (page: number) =>
  useQuery([queryKeys.pendingReport, page], () => getPendingReports(page));
