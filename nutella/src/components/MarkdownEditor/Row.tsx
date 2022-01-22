import { FC, useContext, useEffect, useRef, useState } from "react";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownCotext";

interface PropsType {
  data: RowType;
}

const Row: FC<PropsType> = ({ data }) => {
  const { text, id } = data;
  const { changeText, addRowAfterId, removeRowById } = useContext(MarkdownContext);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.innerText = text;
    }
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      addRowAfterId(id);
    }

    if (e.key === "Backspace" && text === "") {
      removeRowById(id);
    }
  };

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    console.log((e.target as Node).textContent);

    changeText(id, (e.target as Node).textContent || "");
  };

  return <div ref={ref} onKeyDown={onKeyDown} contentEditable onInput={onInput} />;
};

export default Row;
