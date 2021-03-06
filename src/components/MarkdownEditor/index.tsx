import {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
} from "react";
import uniqueId from "../../constant/UniqueId";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownContext";
import MarkdownProvider from "../Providers/MarkdownProvider";
import Image from "./Image";
import Row from "./Row";
import * as S from "./styles";

interface PropsType {
  rows: RowType[];
  setRows: (rows: RowType[]) => void;
  disabled?: boolean;
}

export interface MarkdownEditorRef {
  matchRows: () => void;
}

export const getInitRows = (): RowType[] => [
  {
    id: uniqueId(),
    type: "p",
    text: "",
    tab: 0,
  },
];

const MarkdownEditor = forwardRef<MarkdownEditorRef, PropsType>(
  ({ setRows, rows, disabled }, ref) => {
    return (
      <MarkdownProvider rows={rows} setRows={setRows} disabled={disabled}>
        <Inner ref={ref} />
      </MarkdownProvider>
    );
  }
);

MarkdownEditor.displayName = "MarkdownEditor";

const Inner = forwardRef<MarkdownEditorRef>((_, ref) => {
  const { rows, refs } = useContext(MarkdownContext);

  const matchRows = useCallback(() => {
    if (refs.current) {
      refs.current.forEach((value, index) => {
        value.innerText = rows[index].text;
      });
    }
  }, [refs, rows]);

  useImperativeHandle(ref, () => ({
    matchRows,
  }));

  return (
    <S.Container>
      {rows.map((value) => {
        if (value.type === "image") {
          return <Image key={value.id} item={value} />;
        }

        return <Row key={value.id} data={value} />;
      })}
    </S.Container>
  );
});

Inner.displayName = "Inner";

export default MarkdownEditor;
