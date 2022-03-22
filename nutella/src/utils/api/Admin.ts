import Uri from "../../constant/Uri";
import request from "../axios";

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
