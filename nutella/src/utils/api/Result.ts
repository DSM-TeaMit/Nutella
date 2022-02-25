import { AxiosResponse } from "axios";
import Uri from "../../constant/Uri";
import { Row } from "../../context/MarkdownCotext";
import request from "../axios";

interface ResultReport {
  subject: string;
  content: string;
}

export interface ParsedResultReport {
  subject: string;
  content: Row[][];
}

export const createResultReport = async (projectUuid: string) => {
  const uri = Uri.result.get({ projectUuid });

  const content: Row[][] = [];

  return await request.post<any, AxiosResponse<any, any>, ResultReport>(uri, {
    subject: "",
    content: JSON.stringify(content),
  });
};

export const getResultReport = async (projectUuid: string) => {
  const uri = Uri.result.get({ projectUuid });

  const response = await request.get<ResultReport>(uri);

  const { data } = response;

  const parsedData: ParsedResultReport = {
    subject: data.subject,
    content: JSON.parse(data.content),
  };

  const responseWithoutData: Omit<AxiosResponse<ResultReport, any>, "data"> = {
    ...response,
  };

  const parsedResponse: AxiosResponse<ParsedResultReport, any> = {
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

  return await request.patch<any, AxiosResponse<any, any>, ResultReport>(
    uri,
    requestData
  );
};
