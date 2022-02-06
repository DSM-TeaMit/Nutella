import ReportAccordion from "./ReportAccordion";
import * as I from "../..//styles";

const Report = () => {
  return (
    <I.ContentInner>
      <I.FlexContainer>
        <ReportAccordion title="승인 대기중인" count={12} />
        <ReportAccordion title="승인 거절된" count={12} />
        <ReportAccordion title="승인 된" count={12} />
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Report;
