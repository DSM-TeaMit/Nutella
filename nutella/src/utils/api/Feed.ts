import Uri from "../../constant/Uri";
import ProjectTypes from "../../interface/ProjectTypes";
import request from "../axios";

export interface FeedType {
  order: string;
  page: number;
  limit: number;
}

export interface FeedList {
  thumbnailUrl: string;
  emoji?: string;
  projectName: string;
  projectType: ProjectTypes;
  projectField: string;
  viewCount: number;
}

export interface Feed {
  count: number;
  projects: FeedList[];
}

export const getFeed = async (data: FeedType) => {
  return await request.get<Feed>(Uri.projectList.get(), { data });
};
