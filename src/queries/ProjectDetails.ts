import { useMutation, useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getProject, uploadImg } from "../utils/api/ProjectDetails";

export const useProjectDetails = (projectUuid: string) =>
  useQuery([queryKeys.projects, projectUuid], () => getProject(projectUuid));

export const useUploadThumbnail = (projectUuid: string) => {
  return useMutation((image: File) => uploadImg(projectUuid, image));
};
