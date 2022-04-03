import { useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getProject } from "../utils/api/ProjectDetails";

export const useProjectDetails = (projectUuid: string | any) =>
  useQuery([queryKeys.projects], () => getProject(projectUuid));
