import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ReportPathType from "../interface/ReportPathType";
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
  getEachReports,
} from "../utils/api/User";

export const useMyProfile = () =>
  useQuery(["profile", "my"], () => getMyProfile());

export const useUserProfile = (userUuid: string) =>
  useQuery(["profile", userUuid], () => getProfile(userUuid));

export const useUserProjects = (userUuid: string, page: number) =>
  useQuery(
    ["projects", userUuid, page],
    () => getUserProjects(userUuid, page),
    { keepPreviousData: true }
  );

export const useMyProjects = (page: number) =>
  useQuery(["projects", "my", page], () => getMyProjects(page), {
    keepPreviousData: true,
  });

export const useUserReports = (userUuid: string, page: number) =>
  useQuery(["reports", userUuid, page], () => getUserReports(userUuid, page), {
    keepPreviousData: true,
  });

export const useMyReports = (page: number) =>
  useQuery(["reports", "my", page], () => getMyReports(page), {
    keepPreviousData: true,
  });

export const useEachReports = (
  type: ReportPathType,
  page: number,
  enabled: boolean,
  userUuid?: string
) => {
  return useQuery(
    ["reports", userUuid, type, page],
    () => getEachReports(type, page, userUuid),
    {
      keepPreviousData: true,
      enabled: enabled,
    }
  );
};

export const useGithubReadme = (githubId: string) =>
  useQuery(["profile", "readme", githubId], () => getGithubReadme(githubId), {
    retry: false,
    refetchOnWindowFocus: false,
  });

export const useDeleteAccount = () => useMutation(() => deleteUser());

export const useModifyGithubId = () =>
  useMutation((githubId: string) => modifyGithubId(githubId));
