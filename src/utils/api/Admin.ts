import Uri from "../../constant/Uri";
import request, { instance } from "../axios";

export interface LoginType {
  id: string;
  password: string;
}

export const postAdminLogin = async (data: LoginType) => {
  return await instance.post(Uri.login.get(), data);
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

export const getCreatedAccount = async (limit: number, page: number) => {
  const uri = Uri.createdAccount.get();

  return await request.get<Accounts>(uri, { params: { limit, page } });
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

export const deleteAdminAccount = async (adminUuid: string) => {
  const uri = Uri.admin.get({ adminUuid });

  return await request.delete(uri);
};

export const migrationUser = async (file: File) => {
  const uri = Uri.migrateUser.get();

  const formData = new FormData();
  formData.append("excel", file);

  return await request.post(uri, formData);
};
