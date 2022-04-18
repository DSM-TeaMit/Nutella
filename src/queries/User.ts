import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { ReportPathType } from "../interface";
import Page from "../interface/Page";
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
  getHeader,
  searchUser,
  UserProjects,
} from "../utils/api/User";

export const useMyProfile = () =>
  useQuery([queryKeys.profile, queryKeys.my], () => getMyProfile());

export const useUserProfile = (userUuid: string) =>
  useQuery([queryKeys.profile, userUuid], () => getProfile(userUuid));

export const useUserProjects = (userUuid: string, initPage: number) =>
  useInfiniteQuery(
    [queryKeys.projects, userUuid],
    async ({ pageParam = initPage }) => {
      const data = await getUserProjects(userUuid, pageParam);

      const d: Page<UserProjects> = { page: pageParam, data: data.data };

      return d;
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );

export const useMyProjects = (initPage: number) =>
  useInfiniteQuery(
    [queryKeys.projects, queryKeys.my],
    async ({ pageParam = initPage }) => {
      const data = await getMyProjects(pageParam);

      const d: Page<UserProjects> = {
        page: pageParam,
        data: data.data,
      };

      return d;
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.page + 1,
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
  useMutation(({ githubId, code }: { githubId: string; code: string }) =>
    modifyGithubId(githubId, code)
  );

export const useHeader = () => useQuery([queryKeys.header], () => getHeader());

export const useSeachUser = () =>
  useMutation((name: string) => searchUser(name));
