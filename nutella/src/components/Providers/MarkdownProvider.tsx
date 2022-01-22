import { useCallback, useMemo, useState } from "react";
import { MarkdownContext, MarkdownContextType, Row } from "../../context/MarkdownCotext";
import {} from "../../constant/";
import uniqueId from "../../constant/UniqueId";

const MarkdownProvider = () => {
  const [rows, setRows] = useState<Row[]>([
    {
      id: uniqueId(),
      text: "",
      type: "p",
    },
  ]);

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
      setRows(rows.filter((value) => value.id !== id));
    },
    [rows]
  );

  const changeRowType = useCallback(
    (id: string, type: string) => {
      const index = rows.findIndex((value) => value.id === id);
      const copyRows = [...rows];

      copyRows[index].type = type;

      setRows(copyRows);
    },
    [rows]
  );

  const value = useMemo<MarkdownContextType>(
    () => ({
      rows,
      addRowAfterId,
      removeRowById,
      changeRowType,
    }),
    [addRowAfterId, changeRowType, removeRowById, rows]
  );

  return <MarkdownContext.Provider value={value}></MarkdownContext.Provider>;
};

export default MarkdownProvider;
