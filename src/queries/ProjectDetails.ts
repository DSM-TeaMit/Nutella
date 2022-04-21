import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { getProject, uploadImg } from "../utils/api/ProjectDetails";

export const useProjectDetails = (projectUuid: string | any) =>
  useQuery([queryKeys.projects], () => getProject(projectUuid));

export const useUploadThumbnail = (image: string) => {
  toast.promise(uploadImg(image), {
    error: "업로드가 실패했습니다.",
    loading: "사진 업로드 로딩 중",
    success: "사진 업로드가 성공했습니다.",
  });
};
