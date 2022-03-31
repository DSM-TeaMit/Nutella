import PendingReport from "../components/PendingReport";
import useTitle from "../hooks/useTitle";

const PendingReportContainer = () => {
  useTitle("승인 대기중인 보고서");

  return <PendingReport />;
};

export default PendingReportContainer;
