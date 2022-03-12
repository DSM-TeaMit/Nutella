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
    others: string | undefined;
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
    others: string | undefined;
  };
}

const dateToString = (date: Date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

export const createPlanReport = async (projectUuid: string) => {
  const uri = Uri.plan.get({ projectUuid });

  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const dateString = dateToString(date);

  return await request.post<Uuid, AxiosResponse<Uuid>, PlanType>(uri, {
    startDate: dateString,
    endDate: dateString,
    includes: { report: true, code: true, outcome: true, others: undefined },
    goal: JSON.stringify(getInitRows()),
    content: JSON.stringify(getInitRows()),
  });
};

export const getPlanReport = async (projectUuid: string) => {
  const uri = Uri.plan.get({ projectUuid });

  const response = await request.get<PlanType>(uri);
  const { data } = response;

  const result: ParsedPlanType = {
    startDate: new Date(data.startDate),
    endDate: new Date(data.endDate),
    goal: JSON.parse(data.goal) as Row[],
    content: JSON.parse(data.content) as Row[],
    includes: data.includes,
  };

  const responseWithoutData: Omit<AxiosResponse<PlanType, unknown>, "data"> = {
    ...response,
  };

  const resultResponse: AxiosResponse<ParsedPlanType, unknown> = {
    ...responseWithoutData,
    data: result,
  };

  return resultResponse;
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

  return await request.patch<unknown, AxiosResponse<unknown, unknown>, PlanType>(
    uri,
    requestData
  );
};

export const submitPlanReport = async (projectUuid: string) => {
  const uri = Uri.submitPlan.get({ projectUuid });

  return await request.patch(uri);
};
