import { useQuery } from "react-query";
import { getProfile, getUserProjects, getUserReports } from "../utils/api/User";

export const useUserProfile = (userUuid: string) =>
  useQuery(["profile", userUuid], () => getProfile(userUuid));

export const useUserProject = (userUuid: string) =>
  useQuery(["projects", userUuid], () => getUserProjects(userUuid));

export const useUserReport = (userUuid: string) =>
  useQuery(["reports", userUuid], () => getUserReports(userUuid));
