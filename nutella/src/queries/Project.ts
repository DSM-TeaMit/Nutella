import { useMutation } from "react-query";
import {
  confirmProjectReport,
  ConfirmType,
  ConfirmValue,
} from "../utils/api/Project";

export const useConfirmReport = (projectUuid: string, type: ConfirmType) =>
  useMutation((value: ConfirmValue) =>
    confirmProjectReport(projectUuid, type, value)
  );
