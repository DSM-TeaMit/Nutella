import { AxiosResponse } from "axios";
import Uri from "../../constant/Uri";
import { Row } from "../../context/MarkdownCotext";
import ProjectTypes from "../../interface/ProjectTypes";
import ReportStatus from "../../interface/ReportStatus";
import RequestorType from "../../interface/RequestorType";
import request from "../axios";

interface Page {
  id: string;
  value: Row[];
}
interface ResultReport {
  subject: string;
  content: string;
}

export interface ParsedResultReport {
  subject: string;
  content: Page[];
}

export interface FullResultReport {
  projectName: string;
  projectType: ProjectTypes;
  requestorType: RequestorType;
  subject: string;
  content: string;
  status: ReportStatus;
  writer: {
    studentNo: number;
    name: string;
  };
}

export interface ParsedFullResultReport {
  projectName: string;
  projectType: ProjectTypes;
  requestorType: RequestorType;
  subject: string;
  content: Page[];
  status: ReportStatus;
  writer: {
    studentNo: number;
    name: string;
  };
}

export const createResultReport = async (projectUuid: string) => {
  const uri = Uri.result.get({ projectUuid });

  const content: Page[] = [];

  return await request.post<
    unknown,
    AxiosResponse<unknown, unknown>,
    ResultReport
  >(uri, {
    subject: "",
    content: JSON.stringify(content),
  });
};

export const getResultReport = async (projectUuid: string) => {
  const uri = Uri.result.get({ projectUuid });

  const response = await request.get<FullResultReport>(uri);

  const { data } = response;

  const parsedData: ParsedFullResultReport = {
    ...data,
    content: JSON.parse(data.content) as Page[],
  };

  const responseWithoutData: Omit<
    AxiosResponse<ResultReport, unknown>,
    "data"
  > = {
    ...response,
  };

  const parsedResponse: AxiosResponse<ParsedFullResultReport, unknown> = {
    ...responseWithoutData,
    data: parsedData,
  };

  return parsedResponse;
};

export const modifyResultReport = async (
  projectUuid: string,
  data: ParsedResultReport
) => {
  const uri = Uri.result.get({ projectUuid });

  const requestData: ResultReport = {
    subject: data.subject,
    content: JSON.stringify(data.content),
  };

  return await request.post<
    unknown,
    AxiosResponse<unknown, unknown>,
    ResultReport
  >(uri, requestData);
};

export const submitResultReport = async (projectUuid: string) => {
  const uri = Uri.submitResult.get({ projectUuid });

  return await request.patch(uri);
};
