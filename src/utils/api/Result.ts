import { AxiosResponse } from "axios";
import Uri from "../../constant/Uri";
import { ProjectTypes, ReportStatus, RequestorType } from "../../interface";
import { Row } from "../../context/MarkdownContext";
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

  return await request.post<unknown, AxiosResponse<unknown, unknown>, ResultReport>(uri, {
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

  const responseWithoutData: Omit<AxiosResponse<ResultReport, unknown>, "data"> = {
    ...response,
  };

  const parsedResponse: AxiosResponse<ParsedFullResultReport, unknown> = {
    ...responseWithoutData,
    data: parsedData,
  };

  return parsedResponse;
};

export const modifyResultReport = async (projectUuid: string, data: ParsedResultReport) => {
  const uri = Uri.result.get({ projectUuid });

  const requestData: ResultReport = {
    subject: data.subject,
    content: JSON.stringify(data.content),
  };

  return await request.post<unknown, AxiosResponse<unknown, unknown>, ResultReport>(
    uri,
    requestData
  );
};

export const submitResultReport = async (projectUuid: string) => {
  const uri = Uri.submitResult.get({ projectUuid });

  return await request.patch(uri);
};

export const uploadFile = async (projectUuid: string, file: File) => {
  const uri = Uri.file.get({ projectUuid });

  const formData = new FormData();
  formData.append("archive", file);

  return await request.post(uri, formData);
};

export const downloadFile = async (projectUuid: string) => {
  const uri = Uri.file.get({ projectUuid });

  return await request.get(uri, { responseType: "blob" });
};

export const getFileExists = async (projectUuid: string) => {
  const uri = Uri.file.get({ projectUuid });

  return await request.get(uri, { params: { dry: true } });
};
