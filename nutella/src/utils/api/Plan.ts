import { AxiosResponse } from "axios";
import { getInitRows } from "../../components/MarkdownEditor";
import Uri from "../../constant/Uri";
import { Row } from "../../context/MarkdownCotext";
import ProjectTypes from "../../interface/ProjectTypes";
import request from "../axios";

export interface Includes {
  report: boolean;
  code: boolean;
  outcome: boolean;
  others: string | undefined;
}

export interface Member {
  studentNo: number;
  name: string;
}

export type Requestor = "USER_EDITABLE" | "USER_NON_EDITABLE" | "ADMIN";

interface PlanType {
  projectName: string;
  projectType: ProjectTypes;
  startDate: string;
  endDate: string;
  requestorType: Requestor;
  writer: Member;
  members: Member[];
  goal: string;
  content: string;
  includes: Includes;
}

interface Uuid {
  uuid: string;
}

export interface ParsedPlanType {
  projectName: string;
  projectType: ProjectTypes;
  startDate: Date;
  endDate: Date;
  requestorType: Requestor;
  writer: Member;
  members: Member[];
  goal: Row[];
  content: Row[];
  includes: Includes;
}

export interface ModifyPlan {
  startDate: string;
  endDate: string;
  goal: string;
  content: string;
  includes: Includes;
}

export interface ParsedModifyPlan {
  startDate: Date;
  endDate: Date;
  goal: Row[];
  content: Row[];
  includes: Includes;
}

const dateToString = (date: Date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

export const createPlanReport = async (projectUuid: string) => {
  const uri = Uri.plan.get({ projectUuid });

  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const dateString = dateToString(date);

  return await request.post<Uuid, AxiosResponse<Uuid>, ModifyPlan>(uri, {
    startDate: dateString,
    endDate: dateString,
    goal: JSON.stringify(getInitRows()),
    content: JSON.stringify(getInitRows()),
    includes: { report: true, code: true, outcome: true, others: undefined },
  });
};

export const getPlanReport = async (projectUuid: string) => {
  const uri = Uri.plan.get({ projectUuid });

  const response = await request.get<PlanType>(uri);
  const { data } = response;

  const result: ParsedPlanType = {
    projectName: data.projectName,
    projectType: data.projectType,
    members: data.members,
    writer: data.writer,
    requestorType: data.requestorType,
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
  data: ParsedModifyPlan
) => {
  const uri = Uri.plan.get({ projectUuid });

  const requestData: ModifyPlan = {
    startDate: dateToString(data.startDate),
    endDate: dateToString(data.endDate),
    goal: JSON.stringify(data.goal),
    content: JSON.stringify(data.content),
    includes: data.includes,
  };

  return await request.patch<
    unknown,
    AxiosResponse<unknown, unknown>,
    ModifyPlan
  >(uri, requestData);
};

export const submitPlanReport = async (projectUuid: string) => {
  const uri = Uri.submitPlan.get({ projectUuid });

  return await request.patch(uri);
};
