import ReportAccordion from "./ReportAccordion";
import * as I from "../..//styles";
import { useMyReports } from "../../../../queries/User";
import { useEffect, useMemo } from "react";
import Error from "../../Error";
import Loading from "../../Loading";
import toast from "react-hot-toast";
import { UserReports } from "../../../../utils/api/User";

const Report = () => {
  const initPage = 1;
  const { data, isError, isLoading } = useMyReports(initPage);
  const list = useMemo(() => {
    if (!data) {
      return undefined;
    }

    const l: UserReports = {
      NOT_SUBMITTED: { projects: [], count: 0 },
      ACCEPTED: { projects: [], count: 0 },
      PENDING: { projects: [], count: 0 },
      REJECTED: { projects: [], count: 0 },
    };

    data.pages.forEach((value) => {
      for (const key in value.data) {
        const k = key as keyof UserReports;
        l[k].projects.push(...value.data[k].projects);
        l[k].count = value.data[k].count;
      }
    });

    return l;
  }, [data]);

  useEffect(() => {
    if (isError) {
      toast.error("유저 보고서를 가져올 수 없습니다.");
    }
  }, [isError]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message="오류 발생. 보고서를 가져올 수 없습니다. 다시 시도해주세요." />;
  }

  return (
    <I.ContentInner>
      <I.FlexContainer>
        {list && list.NOT_SUBMITTED.count > 0 && (
          <ReportAccordion
            value={true}
            title="작성 중인"
            data={list?.NOT_SUBMITTED}
            status="NOT_SUBMITTED"
          />
        )}
        {list && list.PENDING.count > 0 && (
          <ReportAccordion
            value={true}
            title="승인 대기중인"
            data={list.PENDING}
            status="PENDING"
          />
        )}
        {list && list.REJECTED.count > 0 && (
          <ReportAccordion title="승인 거절된" data={list.REJECTED} status="REJECTED" />
        )}
        {list && list.ACCEPTED.count > 0 && (
          <ReportAccordion title="승인 된" data={list.ACCEPTED} status="ACCEPTED" />
        )}
        {list &&
          list.ACCEPTED.count +
            list.REJECTED.count +
            list.PENDING.count +
            list.NOT_SUBMITTED.count ===
            0 && <I.Message>보고서가 존재하지 않습니다.</I.Message>}
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Report;
