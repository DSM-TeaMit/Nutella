import { ContentInner } from "../../styles";
import ReportAccordion from "./ReportAccordion";
import * as S from "./styles";

const Report = () => {
  return (
    <ContentInner>
      <S.Container>
        <ReportAccordion title="승인 대기중인" count={12} />
        <ReportAccordion title="승인 거절된" count={12} />
        <ReportAccordion title="승인 된" count={12} />
      </S.Container>
    </ContentInner>
  );
};

export default Report;
