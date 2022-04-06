import { PlanStatus } from "../interface";

const reportStatusMessage = new Map<PlanStatus, string>()
  .set("ACCEPTED", "승인됨")
  .set("NOT_SUBMITTED", "작성중")
  .set("PENDING", "승인 대기중")
  .set("REJECTED", "반환됨");

export default reportStatusMessage;
