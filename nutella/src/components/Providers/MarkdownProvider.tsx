import { FC, useCallback, useMemo, useRef, useState, useEffect } from "react";
import { MarkdownContext, MarkdownContextType, Row } from "../../context/MarkdownCotext";
import {} from "../../constant/";
import uniqueId from "../../constant/UniqueId";

const MarkdownProvider: FC = ({ children }) => {
  const [rows, setRows] = useState<Row[]>([
    {
      id: uniqueId(),
      text: "",
      type: "p",
      tab: 0,
    },
  ]);
  const refs = useRef<HTMLDivElement[]>([]);

  const findIndexById = useCallback(
    (id: string) => rows.findIndex((value) => value.id === id),
    [rows]
  );

  const addRowAfterId = useCallback(
    (id: string) => {
      const copyRows = [...rows];
      const index = findIndexById(id);
      if (index === -1) {
        throw new Error("존재하지 않는 ID입니다.");
      }

      copyRows.splice(index + 1, 0, {
        id: uniqueId(),
        text: "",
        type: "p",
        tab: rows[index].tab,
      });

      setRows(copyRows);
    },
    [findIndexById, rows]
  );

  const removeRowById = useCallback(
    (id: string) => {
      let index = findIndexById(id) - 1;
      setRows(rows.filter((value) => value.id !== id));
      if (index < 0) {
        index = 0;
      }

      if (refs.current) {
        const s = window.getSelection();
        const r = document.createRange();
        const p = refs.current[index].childNodes[0];
        r.collapse(true);

        if (refs.current[index].childNodes.length <= 0) {
          const p = refs.current[index];
          r.setStart(p, 0);
        } else {
          const length = rows[index].text.length;
          r.setStart(p, length);
        }

        if (s) {
          s.removeAllRanges();
          s.addRange(r);
        }

        refs.current[index].focus();
      }
    },
    [findIndexById, rows]
  );

  const changeRowType = useCallback(
    (id: string, type: string) => {
      const index = findIndexById(id);
      const copyRows = [...rows];

      copyRows[index].type = type;

      setRows(copyRows);
    },
    [findIndexById, rows]
  );

  const changeText = useCallback(
    (id: string, text: string) => {
      const index = findIndexById(id);
      const copyRows = [...rows];

      copyRows[index].text = text;

      setRows(copyRows);
    },
    [findIndexById, rows]
  );

  const changeVerticalFocus = useCallback(
    (id: string, step: number) => {
      let index = findIndexById(id) + step;

      if (index < 0) {
        index = 0;
      } else if (index >= rows.length) {
        index = rows.length - 1;
      }

      const selection = window.getSelection();

      if (!selection) {
        return;
      }

      const nextNode = refs.current[index];
      const range = document.createRange();
      range.collapse(true);

      if (nextNode.childNodes.length > 0) {
        let { startOffset } = selection.getRangeAt(0);
        const textNode = nextNode.childNodes[0];
        const length = textNode.textContent!.length;

        if (startOffset >= length) {
          startOffset = length;
        }

        range.setStart(textNode, startOffset);
      } else {
        const node = refs.current[index];

        range.setStart(node, 0);
      }
      nextNode.focus();

      selection.removeAllRanges();
      selection.addRange(range);
    },
    [findIndexById, rows]
  );

  const value = useMemo<MarkdownContextType>(
    () => ({
      rows,
      addRowAfterId,
      removeRowById,
      changeRowType,
      changeText,
      refs,
      changeVerticalFocus,
    }),
    [addRowAfterId, changeRowType, changeText, changeVerticalFocus, removeRowById, rows]
  );

  return <MarkdownContext.Provider value={value}>{children}</MarkdownContext.Provider>;
};

export default MarkdownProvider;
