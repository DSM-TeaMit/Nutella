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
  .set("-", "ul")
  .set("\\d+.", "ol");

const placeholderMap = new Map<string, string>()
  .set("p", "비어있는 본문")
  .set("h1", "헤딩 1")
  .set("h2", "헤딩 2")
  .set("h3", "헤딩 3")
  .set("h4", "헤딩 4")
  .set("h5", "헤딩 5")
  .set("h6", "헤딩 6")
  .set("blockquote", "비어있는 인용")
  .set("ul", "비어있는 리스트")
  .set("ol", "비어있는 리스트");

const ulTypeMap = new Map<number, string>()
  .set(0, "disc")
  .set(1, "circle")
  .set(2, "square");

const isList = (type: string) => ["ul", "ol"].includes(type);

const getType = (type: string) => {
  if (isList(type)) {
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

        if (type !== "p") {
          changeRowType(id, "p");
        } else if (tab > 0) {
          changeTab(id, -1);
        } else {
          removeRowById(id);
        }
      }

      const step = new Map<string, number>()
        .set("ArrowUp", -1)
        .set("ArrowDown", 1)
        .get(e.key);
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
    [
      addRowAfterId,
      changeRowType,
      changeTab,
      changeVerticalFocus,
      id,
      removeRowById,
      tab,
      text,
      type,
    ]
  );

  const onInput = useCallback(
    (e: React.FormEvent<HTMLDivElement>) => {
      let text =
        (e.target as HTMLDivElement).innerHTML
          .replace(/&nbsp;/g, " ")
          .replace(/&gt;/g, ">") || "";

      const key = keyArray.find((value) => new RegExp(`^${value} `).test(text));

      if (key) {
        e.preventDefault();
        e.stopPropagation();
        const tag = tagMap.get(key)!;

        text = text.replace(new RegExp(`${key} `), "");

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
          marginLeft: !isList(type) && `calc(${tab} * 1.2rem)`,
          cursor: "text",
        },
      }),
    [onInput, onKeyDown, setRef, tab, type]
  );

  //order list의 시작 숫자를 반환하는 함수
  const getStart = useCallback((): number => {
    let index = currentIndex - 1;
    let start = 1;
    const { tab, type } = rows[currentIndex];

    //첫 줄이면 1을 반환
    if (currentIndex === 0) {
      return start;
    }

    while (true) {
      const prev = rows[index];
      if (index < 0 || prev.tab < tab) {
        break;
      }

      if (prev.tab === tab && prev.type === type) start++;
      else if (prev.type !== type) break;

      index--;
    }
    return start;
  }, [currentIndex, rows]);

  return isList(type) ? (
    type === "ul" ? (
      <li
        style={{
          paddingLeft: `calc(${tab} * 1.2rem)`,
          listStyleType: ulTypeMap.get(tab % 3),
        }}
      >
        {renderRow}
      </li>
    ) : (
      <ol
        style={{
          paddingLeft: `calc(${tab} * 1.2rem)`,
        }}
        start={getStart()}
      >
        <li
          style={{
            listStyleType: "decimal",
          }}
        >
          {renderRow}
        </li>
      </ol>
    )
  ) : (
    renderRow
  );
};

export default Row;