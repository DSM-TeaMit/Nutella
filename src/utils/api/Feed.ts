import Uri from "../../constant/Uri";
import ProjectTypes from "../../interface/ProjectTypes";
import request from "../axios";
export interface project {
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
  projects: project[];
}

export const getFeed = async (order: string, page: number) => {
  const params = {
    order: order,
    page: page,
    limit: 12,
  };

  return await request.get<Feed>(Uri.projectList.get(), { params });
};
