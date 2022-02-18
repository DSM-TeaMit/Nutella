import React, { FC, useCallback, useContext, useEffect, useMemo } from "react";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownCotext";
import * as S from "./styles";
import HandleSVG from "../../assets/icons/handle.svg";
import Tag from "../../interface/Tag";
interface PropsType {
  data: RowType;
}

interface PopupItem {
  title: string;
  description: string[];
  onClick: () => void;
}

const tagMap = new Map<string, Tag>()
  .set("#", "h1")
  .set("##", "h2")
  .set("###", "h3")
  .set("####", "h4")
  .set("#####", "h5")
  .set("######", "h6")
  .set(">", "blockquote")
  .set("-", "ul")
  .set("\\d+.", "ol");

const placeholderMap = new Map<Tag, string>()
  .set("p", "비어있는 본문")
  .set("h1", "제목 1")
  .set("h2", "제목 2")
  .set("h3", "제목 3")
  .set("h4", "제목 4")
  .set("h5", "제목 5")
  .set("h6", "제목 6")
  .set("blockquote", "비어있는 인용")
  .set("ul", "비어있는 목록")
  .set("ol", "비어있는 목록");

const ulTypeMap = new Map<number, string>()
  .set(0, "disc")
  .set(1, "circle")
  .set(2, "square");

const isList = (type: Tag) => ["ul", "ol"].includes(type);

const getType = (type: Tag) => {
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

  const popupItems = useMemo<PopupItem[]>(
    () => [
      {
        title: "제목 1",
        description: ["2.25rem | 굵음", "단축 : #"],
        onClick: () => changeRowType(id, "h1"),
      },
      {
        title: "제목 2",
        description: ["1.75rem | 굵음", "단축 : ##"],
        onClick: () => changeRowType(id, "h2"),
      },
      {
        title: "제목 3",
        description: ["1.5rem | 굵음", "단축 : ###"],
        onClick: () => changeRowType(id, "h3"),
      },
      {
        title: "제목 4",
        description: ["1.25rem | 중간", "단축 : ####"],
        onClick: () => changeRowType(id, "h4"),
      },
      {
        title: "제목 5",
        description: ["1.25rem | 중간", "단축 : #####"],
        onClick: () => changeRowType(id, "h5"),
      },
      {
        title: "제목 6",
        description: ["1rem | 굵음", "단축 : ######"],
        onClick: () => changeRowType(id, "h6"),
      },
      {
        title: "인용",
        description: ["1rem | 표준", "단축 : >"],
        onClick: () => changeRowType(id, "blockquote"),
      },
      {
        title: "순서 있는 목록",
        description: ["1rem | 표준", "단축 : {아무 숫자}."],
        onClick: () => changeRowType(id, "ol"),
      },
      {
        title: "순서 없는 목록",
        description: ["1rem | 표준", "단축 : -"],
        onClick: () => changeRowType(id, "ul"),
      },
    ],
    []
  );

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
          cursor: "text",
        },
      }),
    [onInput, onKeyDown, setRef, tab, type]
  );

  const renderListRow = useMemo(
    () =>
      type === "ul" ? (
        <li style={{ listStyleType: ulTypeMap.get(tab % 3) }}>{renderRow}</li>
      ) : (
        <ol start={getStart()}>
          <li style={{ listStyleType: "decimal" }}>{renderRow}</li>
        </ol>
      ),
    [type, tab, renderRow, getStart]
  );

  return (
    <S.RowContainer margin={`calc(${tab} * 1.2rem)`}>
      <S.Handle className="handle">
        <S.HandleIcon src={HandleSVG} />
        <S.PopUp className="popup">
          <S.PopupRowTitle>행 종류</S.PopupRowTitle>
          <S.PopupRowOuter>
            {popupItems.map((value, index) => {
              const { title, description, onClick } = value;
              return (
                <S.PopupRowContainer onClick={onClick} key={index}>
                  <S.PopupRowTitle>{title}</S.PopupRowTitle>
                  <S.PopupRowDescription>
                    {description.map((value) => (
                      <div>{value}</div>
                    ))}
                  </S.PopupRowDescription>
                </S.PopupRowContainer>
              );
            })}
          </S.PopupRowOuter>
        </S.PopUp>
      </S.Handle>
      {isList(type) ? renderListRow : renderRow}
    </S.RowContainer>
  );
};

export default Row;
