import Uri from "../../constant/Uri";
import request from "../axios";
import { project } from "./Feed";

export interface ProjectList {
  count: number;
  projects: project[];
}

export interface MemberList {
  count: number;
  projects: project[];
}

export interface SearchList {
  projectName: ProjectList;
  memberName: MemberList;
}

export const getSearch = async (keyword: string) => {
  const params = {
    order: "popularity",
    page: 1,
    limit: 8,
    keyword: keyword,
  };

  return await request.get<SearchList>(Uri.projectSearch.get(), { params });
};

export const getSearchType = async (
  page: number,
  keyword: string,
  searchType: string
) => {
  const params = {
    order: "popularity",
    page: page,
    limit: 8,
    keyword: keyword,
    searchBy: searchType,
  };

  return await request.get<SearchList>(Uri.projectSearchType.get(), { params });
};
