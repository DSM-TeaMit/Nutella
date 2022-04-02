import { useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getProject } from "../utils/api/ProjectDetails";

export const useComment = (projectUuid: string) =>
  useQuery([queryKeys.projects], () => getProject(projectUuid));
