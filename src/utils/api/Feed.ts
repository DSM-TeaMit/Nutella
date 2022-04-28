import LIMIT from "../../constant/Limit";
import Uri from "../../constant/Uri";
import { ProjectTypes } from "../../interface";
import request from "../axios";
export interface Project {
  thumbnailUrl: string;
  emoji?: string;
  projectName: string;
  projectType: ProjectTypes;
  projectField: string;
  viewCount: number;
  uuid: string;
}

export interface Feed {
  count: number;
  projects: Project[];
}

export type Order = "popularity" | "recently";

export const getFeed = async (order: Order, page: number) => {
  const params = {
    order: order,
    page: page,
    limit: LIMIT,
  };

  return await request.get<Feed>(Uri.projectList.get(), { params });
};
