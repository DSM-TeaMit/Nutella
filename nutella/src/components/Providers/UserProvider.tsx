import { FC, useState } from "react";
import { Admin, UserContext, User } from "../../context/UserContext";

const UserProvider: FC = ({ children }) => {
  const userState = useState<Admin | User>({
    uuid: "",
    name: "",
    studentNo: 9999,
    userType: "user",
  });

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
