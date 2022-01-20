import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled.div`
  background-color: white;
  padding: 40px;
`;

const TestModal: FC = () => {
  return <Container>hello world</Container>;
};

export default TestModal;
