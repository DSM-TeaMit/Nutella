import { useMutation, useQueryClient } from "react-query";
import { postUserInfo, InfoType } from "../utils/api/Signup";

export const useUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: InfoType) => postUserInfo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["info"]);
    },
  });
};
