import Uri from "../../constant/Uri";
import request from "../axios";

export interface LoginType {
  id: string;
  password: string;
}

export const postAdminLogin = async (data: LoginType) => {
  return await request.post(Uri.login.get(), data);
};
