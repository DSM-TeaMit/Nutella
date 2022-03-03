import { createContext } from "react";

export interface AdminContextType {
  uuid: string;
  name: string;
  userType: "user" | "admin";
}

export interface UserContextType extends AdminContextType {
  studentNo: number;
}

export const UserContext = createContext<UserContextType | AdminContextType>({
  uuid: "",
  name: "",
  userType: "user",
  studentNo: 9999,
});
