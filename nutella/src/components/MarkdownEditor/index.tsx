import { FC, useContext } from "react";
import uniqueId from "../../constant/UniqueId";
import { MarkdownContext, Row as RowType } from "../../context/MarkdownCotext";
import State from "../../interface/State";
import MarkdownProvider from "../Providers/MarkdownProvider";
import Image from "./Image";
import Row from "./Row";
import * as S from "./styles";

interface PropsType {
  rowState: State<RowType[]>;
}

export const getInitRows = (): RowType[] => [
  {
    id: uniqueId(),
    type: "p",
    text: "",
    tab: 0,
  },
];

const MarkdownEditor: FC<PropsType> = ({ rowState }) => {
  return (
    <MarkdownProvider rowState={rowState}>
      <Inner />
    </MarkdownProvider>
  );
};

const Inner = () => {
  const { rows } = useContext(MarkdownContext);

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
};

export default MarkdownEditor;
