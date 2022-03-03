import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUserContext = () => useContext(UserContext);

export default useUserContext;
