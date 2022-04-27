import LIMIT from "../../constant/Limit";
import Uri from "../../constant/Uri";
import request from "../axios";
import { Project } from "./Feed";

export interface ProjectList {
  count: number;
  projects: Project[];
}

export interface MemberList {
  count: number;
  projects: Project[];
}

export interface SearchList {
  projectName: ProjectList;
  memberName: MemberList;
}

export const getSearch = async (keyword: string, page: number) => {
  const params = {
    page: page,
    limit: LIMIT,
    keyword: keyword,
  };

  return await request.get<SearchList>(Uri.projectSearch.get(), { params });
};

export type SearchBy = "projectName" | "memberName";

export const getSearchEach = async (keyword: string, page: number, searchBy: SearchBy) => {
  const params = {
    page: page,
    limit: LIMIT,
    keyword: keyword,
    searchBy: searchBy,
  };

  return await request.get<SearchList>(Uri.projectSearchEach.get(), { params });
};
