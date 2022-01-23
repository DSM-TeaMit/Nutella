import React, { FC, useCallback, useContext, useEffect, useMemo } from "react";
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
  .set(">", "blockquote")
  .set("-", "ul");

const placeholderMap = new Map<string, string>()
  .set("p", "비어있는 본문")
  .set("h1", "헤딩 1")
  .set("h2", "헤딩 2")
  .set("h3", "헤딩 3")
  .set("h4", "헤딩 4")
  .set("h5", "헤딩 5")
  .set("h6", "헤딩 6")
  .set("blockquote", "비어있는 인용")
  .set("ul", "비어있는 리스트");

const getType = (type: string) => {
  if (["ul"].includes(type)) {
    return "p";
  }
  return type;
};

const keyArray = Array.from(tagMap.keys());

const Row: FC<PropsType> = ({ data }) => {
  const { text, id, type, tab } = data;
  const {
    changeText,
    addRowAfterId,
    removeRowById,
    rows,
    refs,
    changeVerticalFocus,
    changeRowType,
    changeTab,
  } = useContext(MarkdownContext);
  const currentIndex = rows.findIndex((value) => value.id === id);

  useEffect(() => {
    if (refs.current) {
      refs.current[currentIndex].focus();
      refs.current[currentIndex].innerText = text;
    }
  }, [refs, type]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
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

      if (e.key === "Tab") {
        e.stopPropagation();
        e.preventDefault();
        if (e.shiftKey) {
          changeTab(id, -1);
        } else {
          changeTab(id, 1);
        }
      }
    },
    [addRowAfterId, changeTab, changeVerticalFocus, id, removeRowById, text]
  );

  const onInput = useCallback(
    (e: React.FormEvent<HTMLDivElement>) => {
      let text =
        (e.target as HTMLDivElement).innerHTML.replace(/&nbsp;/g, " ").replace(/&gt;/g, ">") || "";
      console.log(text);

      const key = keyArray.find((value) => new RegExp(`^${value} `).test(text));

      if (key) {
        e.preventDefault();
        e.stopPropagation();
        const tag = tagMap.get(key)!;

        text = text.replace(`${key} `, "");

        changeRowType(id, tag);
      }

      changeText(id, text);
    },
    [changeRowType, changeText, id]
  );

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      if (el && refs.current) {
        refs.current[currentIndex] = el;
      }
    },
    [currentIndex, refs]
  );

  const renderRow = useMemo(
    () =>
      React.createElement(getType(type), {
        ref: setRef,
        onKeyDown,
        contentEditable: true,
        onInput,
        placeholder: placeholderMap.get(type),
        style: {
          outline: "none",
          paddingLeft: `calc(${tab} * 1.2rem)`,
        },
      }),
    [onInput, onKeyDown, setRef, tab, type]
  );

  return ["ul"].includes(type) ? <li>{renderRow}</li> : renderRow;
};

export default Row;
