import React, { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownCotext";

interface PropsType {
  data: RowType;
}

const tagMap = new Map<string, string>()
  .set("#", "h1")
  .set("##", "h2")
  .set("###", "h3")
  .set("####", "h4")
  .set("#####", "h5")
  .set("######", "h6")
  .set(">", "blockquote");

const placeholderMap = new Map<string, string>()
  .set("p", "비어있는 본문")
  .set("h1", "헤딩 1")
  .set("h2", "헤딩 2")
  .set("h3", "헤딩 3")
  .set("h4", "헤딩 4")
  .set("h5", "헤딩 5")
  .set("h6", "헤딩 6")
  .set("blockquote", "비어있는 인용");

const keyArray = Array.from(tagMap.keys());

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
    let text =
      (e.target as HTMLDivElement).innerHTML.replace(/&nbsp;/g, " ").replace(/&gt;/g, ">") || "";

    const key = keyArray.find((value) => {
      const regex = new RegExp(`^${value} `);
      console.log(regex);
      console.log(text);

      return regex.test(text);
    });

    if (key) {
      const tag = tagMap.get(key)!;
      e.preventDefault();
      e.stopPropagation();

      text = text.replace(`${key} `, "");
      console.log(tag);

      changeRowType(id, tag);
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
    placeholder: placeholderMap.get(type),
  });

  return renderRow;
};

export default Row;
