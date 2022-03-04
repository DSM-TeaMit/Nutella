import { createContext } from "react";
import State from "../interface/State";

export interface Admin {
  uuid: string;
  name: string;
  userType: "user" | "admin";
}

export interface User extends Admin {
  studentNo: number;
}

export type UserContextType = State<Admin | User>;

export const UserContext = createContext<UserContextType>([
  {
    uuid: "",
    name: "",
    userType: "user",
    studentNo: 9999,
  },
  () => {},
]);
