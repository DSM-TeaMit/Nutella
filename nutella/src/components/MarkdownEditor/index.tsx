import {
  FC,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
} from "react";
import uniqueId from "../../constant/UniqueId";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownCotext";
import MarkdownProvider from "../Providers/MarkdownProvider";
import Image from "./Image";
import Row from "./Row";
import * as S from "./styles";

interface PropsType {
  rows: RowType[];
  setRows: (rows: RowType[]) => void;
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

const MarkdownEditor: FC<PropsType> = ({ setRows, rows }) => {
  return (
    <MarkdownProvider rows={rows} setRows={setRows}>
      <Inner />
    </MarkdownProvider>
  );
};

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
