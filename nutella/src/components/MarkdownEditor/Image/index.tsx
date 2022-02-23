import { FC } from "react";
import { Row } from "../../../context/MarkdownCotext";
import * as S from "./styles";

interface PropsType {
  item: Row;
}

const Image: FC<PropsType> = ({ item }) => {
  return (
    <S.Container>
      <S.Image src={item.text} />
    </S.Container>
  );
};

export default Image;
