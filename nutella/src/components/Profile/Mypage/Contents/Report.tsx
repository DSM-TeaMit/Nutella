import ReportAccordion from "./ReportAccordion";
import * as I from "../..//styles";
import { useMyReports } from "../../../../queries/User";
import { useState } from "react";

const Report = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isError, isLoading } = useMyReports(page);

  if (isError || isLoading) {
    return <></>;
  }

  const { accepted, pending, rejected } = data!.data;

  return (
    <I.ContentInner>
      <I.FlexContainer>
        {pending.count > 0 && (
          <ReportAccordion
            title="승인 대기중인"
            data={pending}
            status="ACCEPTED"
          />
        )}
        {rejected.count > 0 && (
          <ReportAccordion
            title="승인 거절된"
            data={rejected}
            status="DECLINED"
          />
        )}
        {accepted.count > 0 && (
          <ReportAccordion title="승인 된" data={accepted} status="PENDING" />
        )}
        {accepted.count + rejected.count + pending.count === 0 && (
          <I.Message>보고서가 존재하지 않습니다.</I.Message>
        )}
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Report;
