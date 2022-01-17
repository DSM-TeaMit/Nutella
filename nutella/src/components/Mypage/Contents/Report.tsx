import { ContentInner } from "../styles";
import ReportAccordion from "./ReportAccordion";
import * as S from "./styles";

const Report = () => {
  return (
    <ContentInner>
      <S.Container>
        <ReportAccordion />
        <ReportAccordion />
        <ReportAccordion />
      </S.Container>
    </ContentInner>
  );
};

export default Report;
