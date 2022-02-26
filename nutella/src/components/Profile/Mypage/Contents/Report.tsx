import ReportAccordion from "./ReportAccordion";
import * as I from "../..//styles";
import { useUserReports } from "../../../../queries/User";
import { useState } from "react";

const Report = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isError, isLoading } = useUserReports(
    "e973c27b-3e0e-4863-86be-b2e0dfd24908",
    page
  );

  if (isError && isLoading) {
    return <></>;
  }

  const { accepted, pending, rejected } = data!.data;

  return (
    <I.ContentInner>
      <I.FlexContainer>
        <ReportAccordion
          title="승인 대기중인"
          data={pending}
          status="ACCEPTED"
        />
        <ReportAccordion
          title="승인 거절된"
          data={rejected}
          status="DECLINED"
        />
        <ReportAccordion title="승인 된" data={accepted} status="PENDING" />
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Report;
