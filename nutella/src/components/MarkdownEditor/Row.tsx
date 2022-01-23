import React, { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownCotext";

interface PropsType {
  data: RowType;
}

const Row: FC<PropsType> = ({ data }) => {
  const { text, id, type } = data;
  const {
    changeText,
    addRowAfterId,
    removeRowById,
    rows,
    refs,
    changeVerticalFocus,
    changeRowType,
  } = useContext(MarkdownContext);
  const currentIndex = rows.findIndex((value) => value.id === id);

  useEffect(() => {
    if (refs.current) {
      refs.current[currentIndex].focus();
      refs.current[currentIndex].innerText = text;
    }
  }, [refs, type]);

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

    const step = new Map<string, number>().set("ArrowUp", -1).set("ArrowDown", 1).get(e.key);
    if (step) {
      e.stopPropagation();
      e.preventDefault();
      changeVerticalFocus(id, step);
    }
  };

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    let text = (e.target as HTMLDivElement).innerHTML.replace(/&nbsp;/g, " ") || "";

    if (/^# /.test(text)) {
      e.preventDefault();
      e.stopPropagation();

      text = text.replace("# ", "");
      changeRowType(id, "h1");
    }

    changeText(id, text);
  };

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      if (el && refs.current) {
        refs.current[currentIndex] = el;
      }
    },
    [currentIndex, refs]
  );

  const renderRow = React.createElement(type, {
    ref: setRef,
    onKeyDown,
    contentEditable: true,
    onInput,
  });

  return renderRow;
};

export default Row;
