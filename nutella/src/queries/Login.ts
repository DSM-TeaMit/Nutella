import { useMutation } from "react-query";
import { LoginType, postAdminLogin } from "../utils/api/Login";

export const useAdminLogin = () =>
  useMutation((data: LoginType) => postAdminLogin(data), {});
