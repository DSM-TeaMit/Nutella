import Uri from "../../constant/Uri";
import request from "../axios";

export type ConfirmType = "plan" | "result";
export type ConfirmValue = "approval" | "return";

export const confirmProjectReport = async (
  projectUuid: string,
  reportType: ConfirmType,
  value: ConfirmValue
) => {
  const uri = Uri.projectConfirm.get({ projectUuid });

  const params = {
    type: reportType,
    value: value === "approval",
  };

  return await request.get(uri, { params });
};
