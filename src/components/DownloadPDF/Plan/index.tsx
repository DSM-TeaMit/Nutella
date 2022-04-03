import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { usePlan } from "../../../queries/Plan";
import ReactPDF, { Document, Page } from "@react-pdf/renderer";

const DownloadPlanPDF = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const projectUuid = useMemo(() => uuid || "", [uuid]);

  const { data, isError, isLoading, isSuccess } = usePlan(
    projectUuid,
    () => {},
    () => {}
  );

  if (isError) {
    return <div>에러</div>;
  }

  if (isLoading) {
    return <div>로딩</div>;
  }

  return (
    <Document>
      <Page size="A4"></Page>
    </Document>
  );
};

export default DownloadPlanPDF;
