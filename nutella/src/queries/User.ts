import { useMutation, useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
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
  useQuery([queryKeys.profile, queryKeys.my], () => getMyProfile());

export const useUserProfile = (userUuid: string) =>
  useQuery([queryKeys.profile, userUuid], () => getProfile(userUuid));

export const useUserProjects = (userUuid: string, page: number) =>
  useQuery(
    [queryKeys.projects, userUuid, page],
    () => getUserProjects(userUuid, page),
    { keepPreviousData: true }
  );

export const useMyProjects = (page: number) =>
  useQuery(
    [queryKeys.projects, queryKeys.my, page],
    () => getMyProjects(page),
    {
      keepPreviousData: true,
    }
  );

export const useUserReports = (userUuid: string, page: number) =>
  useQuery(
    [queryKeys.reports, userUuid, page],
    () => getUserReports(userUuid, page),
    {
      keepPreviousData: true,
    }
  );

export const useMyReports = (page: number) =>
  useQuery([queryKeys.reports, queryKeys.my, page], () => getMyReports(page), {
    keepPreviousData: true,
  });

export const useEachReports = (
  type: ReportPathType,
  page: number,
  enabled: boolean,
  userUuid?: string
) => {
  return useQuery(
    [queryKeys.reports, userUuid, type, page],
    () => getEachReports(type, page, userUuid),
    {
      keepPreviousData: true,
      enabled: enabled,
    }
  );
};

export const useGithubReadme = (githubId: string) =>
  useQuery(
    [queryKeys.profile, queryKeys.readme, githubId],
    () => getGithubReadme(githubId),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

export const useDeleteAccount = () => useMutation(() => deleteUser());

export const useModifyGithubId = () =>
  useMutation((githubId: string) => modifyGithubId(githubId));
