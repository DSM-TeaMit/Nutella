import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import queryKeys from "../constant/QueryKeys";
import { List } from "../hooks/usePagination";
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
  UserReports,
  ProjectType,
} from "../utils/api/User";

export const useMyProfile = () => useQuery([queryKeys.profile, queryKeys.my], () => getMyProfile());

export const useUserProfile = (userUuid: string) =>
  useQuery([queryKeys.profile, userUuid], () => getProfile(userUuid));

export const useUserProjects = (userUuid: string, initPage: number) =>
  useInfiniteQuery(
    [queryKeys.projects, userUuid],
    async ({ pageParam = initPage }) => {
      const data = await getUserProjects(userUuid, pageParam);

      const d: Page<List<ProjectType>> = {
        page: pageParam,
        data: { list: data.data.projects, count: data.data.count },
      };

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

      const d: Page<List<ProjectType>> = {
        page: pageParam,
        data: { list: data.data.projects, count: data.data.count },
      };

      return d;
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );

export const useUserReports = (userUuid: string, initPage: number) =>
  useInfiniteQuery(
    [queryKeys.reports, userUuid],
    async ({ pageParam = initPage }) => {
      const data = await getUserReports(userUuid, pageParam);

      const d: Page<UserReports> = {
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

export const useMyReports = (initPage: number) =>
  useInfiniteQuery(
    [queryKeys.reports, queryKeys.my],
    async ({ pageParam = initPage }) => {
      const data = await getMyReports(pageParam);

      const d: Page<UserReports> = {
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

export const useEachReports = (type: ReportPathType, initPage: number, userUuid?: string) => {
  return useInfiniteQuery(
    [queryKeys.reports, userUuid, type],
    async ({ pageParam = initPage + 1 }) => {
      const data = await getEachReports(type, pageParam, userUuid);

      const d: Page<UserReports> = {
        page: pageParam,
        data: data.data,
      };

      return d;
    },
    {
      keepPreviousData: true,
      enabled: false,
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
};

export const useGithubReadme = (githubId: string) =>
  useQuery([queryKeys.profile, queryKeys.readme, githubId], () => getGithubReadme(githubId), {
    retry: false,
    refetchOnWindowFocus: false,
  });

export const useDeleteAccount = () => useMutation(() => deleteUser());

export const useModifyGithubId = () =>
  useMutation(({ githubId, code }: { githubId: string; code: string }) =>
    modifyGithubId(githubId, code)
  );

export const useHeader = () => useQuery([queryKeys.header], () => getHeader());

export const useSeachUser = () => useMutation((name: string) => searchUser(name));
