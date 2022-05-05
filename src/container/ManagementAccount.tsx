import ManagementAccount from "../components/Profile/ManagementAccount";
import useTitle from "../hooks/useTitle";

const ManagementAccountContainer = () => {
  useTitle("계정 관리");

  return <ManagementAccount />;
};

export default ManagementAccountContainer;
