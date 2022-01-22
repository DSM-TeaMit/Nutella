import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownCotext";

interface PropsType {
  data: RowType;
}

const Row: FC<PropsType> = ({ data }) => {
  const { text, id } = data;
  const { changeText, addRowAfterId, removeRowById, rows, refs } = useContext(MarkdownContext);
  const currentIndex = rows.findIndex((value) => value.id === id);

  useEffect(() => {
    if (refs.current) {
      refs.current[currentIndex].focus();
      refs.current[currentIndex].innerText = text;
    }
  }, [refs]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      addRowAfterId(id);
    }

    if (e.key === "Backspace" && text === "") {
      e.stopPropagation();
      e.preventDefault();
      removeRowById(id);
    }
  };

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    console.log((e.target as Node).textContent);

    changeText(id, (e.target as Node).textContent || "");
  };

  const setRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (el && refs.current) {
        refs.current[currentIndex] = el;
      }
    },
    [currentIndex, refs]
  );

  return <div ref={setRef} onKeyDown={onKeyDown} contentEditable onInput={onInput} />;
};

export default Row;
