import { useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getCreatedAccount } from "../utils/api/Admin";

export const useCreatedAccount = () =>
  useQuery([queryKeys.accounts], () => getCreatedAccount());
