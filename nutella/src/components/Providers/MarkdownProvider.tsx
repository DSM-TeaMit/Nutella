import { FC, useCallback, useMemo, useRef } from "react";
import {
  MarkdownContext,
  MarkdownContextType,
  Row,
} from "../../context/MarkdownCotext";
import uniqueId from "../../constant/UniqueId";
import Tag from "../../interface/Tag";
import { postImage } from "../../utils/api/Image";
import { getInitRows } from "../MarkdownEditor";
import toast from "react-hot-toast";

interface PropsType {
  rows: Row[];
  setRows: (rows: Row[]) => void;
  disabled?: boolean;
}

const isList = (type: string) => ["ul", "ol"].includes(type);

const MarkdownProvider: FC<PropsType> = ({
  children,
  rows,
  setRows,
  disabled,
}) => {
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
      const type = rows[index].type;

      copyRows.splice(index + 1, 0, {
        id: uniqueId(),
        text: "",
        type: isList(type) ? type : "p",
        tab: rows[index].tab,
      });

      setRows(copyRows);
    },
    [findIndexById, rows, setRows]
  );

  const removeRowById = useCallback(
    (id: string) => {
      const currentIndex = findIndexById(id);
      const { type: currentType } = rows[currentIndex];
      if (
        currentType !== "image" &&
        (rows.length <= 1 ||
          rows.filter((value) => value.type !== "image").length <= 1)
      ) {
        return;
      }

      const idRemoved = rows.filter((value) => value.id !== id);

      if (idRemoved.length <= 0) {
        setRows([...getInitRows()]);
      } else {
        setRows(idRemoved);
      }

      let index = currentIndex - 1;
      const { type } = rows[index];
      if (index < 0) {
        index = 0;
      }

      if (currentType === "image" || type === "image") {
        return;
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
    [findIndexById, rows, setRows]
  );

  const changeRowType = useCallback(
    (id: string, type: Tag) => {
      const index = findIndexById(id);
      const copyRows = [...rows];

      copyRows[index].type = type;

      setRows(copyRows);
    },
    [findIndexById, rows, setRows]
  );

  const changeText = useCallback(
    (id: string, text: string) => {
      const index = findIndexById(id);
      const copyRows = [...rows];

      copyRows[index].text = text;

      setRows(copyRows);
    },
    [findIndexById, rows, setRows]
  );

  const changeVerticalFocus = useCallback(
    (id: string, step: number) => {
      let index = findIndexById(id) + step;

      if (index < 0) {
        index = 0;
      } else if (index >= rows.length) {
        index = rows.length - 1;
      }

      if (rows[index].type === "image") {
        return;
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

  const changeTab = useCallback(
    (id: string, step: number) => {
      const index = findIndexById(id);
      if (index === 0) {
        return;
      }
      const copyRows = [...rows];
      const fixedStep = Math.sign(step);
      let tab = rows[index].tab + fixedStep;
      const prevTab = rows[index - 1].tab;

      if (tab < 0) {
        tab = 0;
      }

      if (tab > prevTab + 1) {
        tab = prevTab + 1;
      }

      copyRows[index].tab = tab;

      setRows(
        copyRows.map((value, index, array) => {
          if (index === 0) {
            return value;
          }
          const { tab } = value;
          const { tab: prevTab } = array[index - 1];

          if (tab > prevTab + 1) {
            value.tab = prevTab + 1;
          }

          return value;
        })
      );
    },
    [findIndexById, rows, setRows]
  );

  const addImages = useCallback(
    async (id: string, files: File[], projectUuid: string) => {
      let idx = 0;
      const urls: string[] = [];

      const postingImage = async () => {
        if (idx === files.length) {
          return;
        }
        try {
          const { data: url } = await postImage(files[idx], projectUuid);

          urls.push(url);
        } catch (error) {
          toast.error(`사진 ${files[idx].name} 업로드 실패`);
        }

        idx++;
        await postingImage();
      };

      await postingImage();

      const index = findIndexById(id);
      if (index === -1) {
        throw new Error("존재하지 않는 ID입니다.");
      }

      const additionalRows: Row[] = urls.map<Row>((value) => ({
        id: uniqueId(),
        type: "image",
        text: value,
        tab: 0,
      }));

      const copyRows = [...rows];

      copyRows.splice(index + 1, 0, ...additionalRows);

      setRows(copyRows);
    },
    [findIndexById, rows, setRows]
  );

  const value = useMemo<MarkdownContextType>(
    () => ({
      rows,
      setRows,
      refs,
      disabled,
      addRowAfterId,
      removeRowById,
      changeRowType,
      changeText,
      changeVerticalFocus,
      changeTab,
      addImages,
    }),
    [
      rows,
      setRows,
      disabled,
      addRowAfterId,
      removeRowById,
      changeRowType,
      changeText,
      changeVerticalFocus,
      changeTab,
      addImages,
    ]
  );

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownProvider;
