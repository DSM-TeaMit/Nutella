import { AxiosResponse } from "axios";
import Uri from "../../constant/Uri";
import { Row } from "../../context/MarkdownCotext";
import ProjectTypes from "../../interface/ProjectTypes";
import request from "../axios";
import { Requestor } from "./Plan";

interface ResultReport {
  subject: string;
  content: string;
}

export interface ParsedResultReport {
  subject: string;
  content: Row[][];
}

export interface FullResultReport {
  projectType: ProjectTypes;
  requestorType: Requestor;
  subject: string;
  content: string;
  writer: {
    studentNo: number;
    name: string;
  };
}

export interface ParsedFullResultReport {
  projectType: ProjectTypes;
  requestorType: Requestor;
  subject: string;
  content: Row[][];
  writer: {
    studentNo: number;
    name: string;
  };
}

export const createResultReport = async (projectUuid: string) => {
  const uri = Uri.result.get({ projectUuid });

  const content: Row[][] = [];

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
    writer: data.writer,
    projectType: data.projectType,
    requestorType: data.requestorType,
    subject: data.subject,
    content: JSON.parse(data.content) as Row[][],
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

  return await request.patch<
    unknown,
    AxiosResponse<unknown, unknown>,
    ResultReport
  >(uri, requestData);
};

export const submitResultReport = async (projectUuid: string) => {
  const uri = Uri.submitResult.get({ projectUuid });

  return await request.patch(uri);
};
