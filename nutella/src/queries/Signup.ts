import { useMutation, useQueryClient, useQuery } from "react-query";
import {
  postUserInfo,
  InfoType,
  getOauthSignup,
  getOauthGithub,
} from "../utils/api/Signup";

export const useOauthGoogleSingup = (code: string | null) =>
  useQuery(["Signup", code], () => getOauthSignup(code));

export const useUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: InfoType) => postUserInfo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["info"]);
    },
  });
};

export const useOauthGithubSignup = (code: string | null) =>
  useQuery(["GithubSignup", code], () => getOauthGithub(code));
