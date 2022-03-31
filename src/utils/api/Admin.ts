import Uri from "../../constant/Uri";
import request from "../axios";

export interface LoginType {
  id: string;
  password: string;
}

export const postAdminLogin = async (data: LoginType) => {
  return await request.post(Uri.login.get(), data);
};

export interface Accounts {
  count: number;
  accounts: AccountType[];
}

export interface AccountType {
  uuid: string;
  uid: string;
  name: string;
  emoji: string;
}

export const getCreatedAccount = async () => {
  const uri = Uri.createdAccount.get();

  return await request.get<Accounts>(uri);
};

export interface AccountData {
  id: string;
  password: string;
  name: string;
}

export const postAccount = async (data: AccountData) => {
  const uri = Uri.register.get();

  return await request.post(uri, data);
};
