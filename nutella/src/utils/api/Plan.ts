import { AxiosResponse } from "axios";
import { getInitRows } from "../../components/MarkdownEditor";
import Uri from "../../constant/Uri";
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
