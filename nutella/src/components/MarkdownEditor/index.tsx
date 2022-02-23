import { useContext, useState } from "react";
import { MarkdownContext } from "../../context/MarkdownCotext";
import MarkdownProvider from "../Providers/MarkdownProvider";
import Image from "./Image";
import Row from "./Row";
import * as S from "./styles";

const MarkdownEditor = () => {
  return (
    <MarkdownProvider>
      <Inner />
    </MarkdownProvider>
  );
};

const Inner = () => {
  const { rows } = useContext(MarkdownContext);

  return (
    <S.Container>
      {rows.map((value) => {
        if (value.type === "image") {
          return <Image key={value.id} item={value} />;
        }

        return <Row key={value.id} data={value} />;
      })}
    </S.Container>
  );
};

export default MarkdownEditor;
