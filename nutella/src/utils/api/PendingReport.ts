import Uri from "../../constant/Uri";
import ProjectTypes from "../../interface/ProjectTypes";
import { ReportTypes } from "../../interface/Report";
import request from "../axios";

interface PendingReport {
  projectName: string;
  projectType: ProjectTypes;
  reportType: ReportTypes;
  submittedAt: string;
  writer: {
    studentNo: number;
    name: string;
  };
}

interface PendingReportList {
  count: number;
  projects: PendingReport[];
}

export const getPendingReports = async () => {
  const uri = Uri.pendingReport.get();

  return await request.get<PendingReportList>(uri);
};
