import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  MarkdownContext,
  Row as RowType,
} from "../../../context/MarkdownCotext";
import * as S from "./styles";
import HandleSVG from "../../../assets/icons/handle.svg";
import { Tag } from "../../../interface";
import Popup from "../Popup";
import { useParams } from "react-router-dom";
interface PropsType {
  data: RowType;
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
  .set("\\d+\\.", "ol");

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
    addImages,
    disabled,
  } = useContext(MarkdownContext);
  const currentIndex = rows.findIndex((value) => value.id === id);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { uuid } = useParams<{ uuid: string }>();

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
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

      if ((e.ctrlKey || e.metaKey) && ["c", "v"].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
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
    (e: React.FormEvent<HTMLElement>) => {
      let text =
        (e.target as HTMLElement).innerHTML
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

  const onDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const onDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();

      setIsDragging(false);
    },
    []
  );

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      addImages(id, files, uuid || "");
    },
    [addImages, id, uuid]
  );

  const isDisabled = useMemo(
    () => (disabled === undefined ? false : disabled),
    [disabled]
  );

  const inputProps = useMemo(
    () => (isDisabled ? undefined : { onKeyDown, onInput }),
    [isDisabled, onInput, onKeyDown]
  );

  const renderRow = useMemo(
    () =>
      React.createElement(getType(type), {
        ref: setRef,
        contentEditable: !isDisabled,
        ...inputProps,
        placeholder: placeholderMap.get(type),
        style: {
          outline: "none",
          cursor: "text",
          wordBreak: "break-word",
        },
        className: rows.length <= 1 ? "first" : undefined,
      }),
    [inputProps, isDisabled, rows.length, setRef, type]
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

  useEffect(() => {
    if (refs.current) {
      refs.current[currentIndex].focus();
      refs.current[currentIndex].innerText = text;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, refs, type]);

  const dragProps = useMemo(
    () =>
      isDisabled ? undefined : { onDragEnter, onDragLeave, onDragOver, onDrop },
    [isDisabled, onDragEnter, onDragLeave, onDragOver, onDrop]
  );

  return (
    <S.RowContainer margin={`calc(${tab} * 1.2rem)`} {...dragProps}>
      {!isDisabled && (
        <S.Handle className="handle">
          <S.HandleIcon src={HandleSVG} />
          <Popup id={id} />
        </S.Handle>
      )}
      {isList(type) ? renderListRow : renderRow}
      <S.DropHint active={isDragging} />
    </S.RowContainer>
  );
};

export default Row;
