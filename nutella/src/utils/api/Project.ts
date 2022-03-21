import Uri from "../../constant/Uri";
import request from "../axios";

export const confirmProjectReport = async (
  projectUuid: string,
  reportType: "plan" | "result",
  value: "approval" | "return"
) => {
  const uri = Uri.projectConfirm.get({ projectUuid });

  const params = {
    type: reportType,
    value: value === "approval",
  };

  return await request.get(uri, { params });
};
