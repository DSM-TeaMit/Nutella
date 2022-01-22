import { useState } from "react";
import Row from "./Row";
import * as S from "./styles";

const MarkdownEditor = () => {
  const [count, setCount] = useState(1);

  return (
    <S.Container>
      {new Array(count).fill(0).map(() => (
        <Row setCount={setCount} count={count} />
      ))}
    </S.Container>
  );
};

export default MarkdownEditor;
