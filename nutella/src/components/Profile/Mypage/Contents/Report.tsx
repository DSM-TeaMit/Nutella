import ReportAccordion from "./ReportAccordion";
import * as I from "../..//styles";
import { useMyReports } from "../../../../queries/User";
import { useEffect } from "react";
import Error from "../../Error";
import Loading from "../../Loading";
import toast from "react-hot-toast";

const Report = () => {
  const { data, isError, isLoading } = useMyReports(1);

  useEffect(() => {
    if (isError) {
      toast.error("유저 보고서를 가져올 수 없습니다.");
    }
  }, [isError]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error message="오류 발생. 보고서를 가져올 수 없습니다. 다시 시도해주세요." />
    );
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
