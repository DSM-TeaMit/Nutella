import { useMutation, useQuery } from "react-query";
import {
  getProfile,
  getUserGithub as getGithubReadme,
  getUserProjects,
  getUserReports,
  MyProfileType,
  deleteUser,
  UserProfileType,
  modifyGithubId,
} from "../utils/api/User";

export const useMyProfile = (userUuid: string) =>
  useQuery(["profile", userUuid], () => getProfile<MyProfileType>(userUuid));

export const useUserProfile = (userUuid: string) =>
  useQuery(["profile", userUuid], () => getProfile<UserProfileType>(userUuid));

export const useUserProjects = (userUuid: string, page: number) =>
  useQuery(["projects", userUuid, page], () => getUserProjects(userUuid, page));

export const useUserReports = (userUuid: string, page: number) =>
  useQuery(["reports", userUuid, page], () => getUserReports(userUuid, page));

export const useGithubReadme = (githubId: string) =>
  useQuery(["profile", "readme", githubId], () => getGithubReadme(githubId), {
    retry: false,
  });

export const useDeleteAccount = () => useMutation(() => deleteUser());

export const useModifyGithubId = () =>
  useMutation((githubId: string) => modifyGithubId(githubId));
