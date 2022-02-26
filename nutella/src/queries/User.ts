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

export const useUserProjects = (userUuid: string) =>
  useQuery(["projects", userUuid], () => getUserProjects(userUuid));

export const useUserReports = (userUuid: string) =>
  useQuery(["reports", userUuid], () => getUserReports(userUuid));

export const useGithubReadme = (githubId: string) =>
  useQuery(["profile", "readme", githubId], () => getGithubReadme(githubId));

export const useDeleteAccount = () => useMutation(() => deleteUser());

export const useModifyGithubId = () =>
  useMutation((githubId: string) => modifyGithubId(githubId));
