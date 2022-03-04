import { useMutation, useQuery } from "react-query";
import {
  getProfile,
  getUserGithub as getGithubReadme,
  getUserProjects,
  getUserReports,
  deleteUser,
  modifyGithubId,
  getMyProfile,
  getMyProjects,
  getMyReports,
} from "../utils/api/User";

export const useMyProfile = () =>
  useQuery(["profile", "my"], () => getMyProfile());

export const useUserProfile = (userUuid: string) =>
  useQuery(["profile", userUuid], () => getProfile(userUuid));

export const useUserProjects = (userUuid: string, page: number) =>
  useQuery(["projects", userUuid, page], () => getUserProjects(userUuid, page));

export const useMyProjects = (page: number) =>
  useQuery(["projects", "my", page], () => getMyProjects(page));

export const useUserReports = (userUuid: string, page: number) =>
  useQuery(["reports", userUuid, page], () => getUserReports(userUuid, page));

export const useMyReports = (page: number) =>
  useQuery(["reports", "my", page], () => getMyReports(page));

export const useGithubReadme = (githubId: string) =>
  useQuery(["profile", "readme", githubId], () => getGithubReadme(githubId), {
    retry: false,
  });

export const useDeleteAccount = () => useMutation(() => deleteUser());

export const useModifyGithubId = () =>
  useMutation((githubId: string) => modifyGithubId(githubId));
