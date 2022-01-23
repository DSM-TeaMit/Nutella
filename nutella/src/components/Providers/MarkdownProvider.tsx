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
    },
  ]);
  const refs = useRef<HTMLDivElement[]>([]);

  const findIndexById = (id: string) => rows.findIndex((value) => value.id === id);

  const addRowAfterId = useCallback(
    (id: string) => {
      const copyRows = [...rows];
      const index = copyRows.findIndex((value) => value.id === id);
      if (index === -1) {
        throw new Error("존재하지 않는 ID입니다.");
      }

      copyRows.splice(index + 1, 0, {
        id: uniqueId(),
        text: "",
        type: "p",
      });

      setRows(copyRows);
    },
    [rows]
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

        if (refs.current[index].childNodes.length <= 0) {
          const p = refs.current[index];
          r.setStart(p, 0);
          r.setEnd(p, 0);
        } else {
          const length = rows[index].text.length;
          r.setStart(p, length);
          r.setEnd(p, length);
        }

        if (s) {
          s.removeAllRanges();
          s.addRange(r);
        }

        refs.current[index].focus();
      }
    },
    [rows]
  );

  const changeRowType = useCallback(
    (id: string, type: string) => {
      const index = findIndexById(id);
      const copyRows = [...rows];

      copyRows[index].type = type;

      setRows(copyRows);
    },
    [rows]
  );

  const changeText = useCallback(
    (id: string, text: string) => {
      const index = findIndexById(id);
      const copyRows = [...rows];

      copyRows[index].text = text;

      setRows(copyRows);
    },
    [rows]
  );

  const changeVerticalFocus = useCallback((id: string, step: number) => {
    const index = findIndexById(id);
  }, []);

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
    [addRowAfterId, changeRowType, changeText, removeRowById, rows]
  );

  return <MarkdownContext.Provider value={value}>{children}</MarkdownContext.Provider>;
};

export default MarkdownProvider;
