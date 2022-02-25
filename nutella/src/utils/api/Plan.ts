import { AxiosResponse } from "axios";
import { getInitRows } from "../../components/MarkdownEditor";
import Uri from "../../constant/Uri";
import { Row } from "../../context/MarkdownCotext";
import request from "../axios";

interface PlanType {
  startDate: string;
  endDate: string;
  goal: string;
  content: string;
  includes: {
    report: boolean;
    code: boolean;
    outcome: boolean;
    others: boolean;
  };
}

interface Uuid {
  uuid: string;
}

export interface ParsedPlanType {
  startDate: Date;
  endDate: Date;
  goal: Row[];
  content: Row[];
  includes: {
    report: boolean;
    code: boolean;
    outcome: boolean;
    others: boolean;
  };
}

const dateToString = (date: Date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

export const createPlanReport = async (projectUuid: string) => {
  const uri = Uri.plan.get({ projectUuid });

  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const dateString = dateToString(date);

  try {
    return await request.post<Uuid, AxiosResponse<Uuid>, PlanType>(uri, {
      startDate: dateString,
      endDate: dateString,
      includes: { report: true, code: true, outcome: true, others: false },
      goal: JSON.stringify(getInitRows()),
      content: JSON.stringify(getInitRows()),
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPlanReport = async (projectUuid: string) => {
  const uri = Uri.plan.get({ projectUuid });

  try {
    const response = await request.get<PlanType>(uri);
    const { data } = response;

    const result: ParsedPlanType = {
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      goal: JSON.parse(data.goal) as Row[],
      content: JSON.parse(data.content) as Row[],
      includes: data.includes,
    };

    const responseWithoutData: Omit<AxiosResponse<PlanType, any>, "data"> = {
      ...response,
    };

    const resultResponse: AxiosResponse<ParsedPlanType, any> = {
      ...responseWithoutData,
      data: result,
    };

    return resultResponse;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const modifyPlanReport = async (
  projectUuid: string,
  data: ParsedPlanType
) => {
  const uri = Uri.plan.get({ projectUuid });

  const requestData: PlanType = {
    startDate: dateToString(data.startDate),
    endDate: dateToString(data.endDate),
    goal: JSON.stringify(data.goal),
    content: JSON.stringify(data.content),
    includes: data.includes,
  };

  try {
    return await request.patch<any, AxiosResponse<any, any>, PlanType>(
      uri,
      requestData
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
