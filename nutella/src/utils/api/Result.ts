import { AxiosResponse } from "axios";
import Uri from "../../constant/Uri";
import { Row } from "../../context/MarkdownCotext";
import request from "../axios";

interface ResultReport {
  subject: string;
  content: string;
}

interface ParsedResultReport {
  subject: string;
  content: Row[][];
}

export const createResultReport = async (projectUuid: string) => {
  const uri = Uri.result.get({ projectUuid });

  const content: Row[][] = [];

  try {
    return await request.post<any, AxiosResponse<any, any>, ResultReport>(uri, {
      subject: "",
      content: JSON.stringify(content),
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getResultReport = async (projectUuid: string) => {
  const uri = Uri.result.get({ projectUuid });

  try {
    const response = await request.get<ResultReport>(uri);

    const { data } = response;

    const parsedData: ParsedResultReport = {
      subject: data.subject,
      content: JSON.parse(data.content),
    };

    const responseWithoutData: Omit<
      AxiosResponse<ResultReport, any>,
      "data"
    > = {
      ...response,
    };

    const parsedResponse: AxiosResponse<ParsedResultReport, any> = {
      ...responseWithoutData,
      data: parsedData,
    };

    return parsedResponse;
  } catch (error) {
    return Promise.reject(error);
  }
};
