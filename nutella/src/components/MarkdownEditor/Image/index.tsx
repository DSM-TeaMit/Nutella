import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MarkdownContext, Row } from "../../../context/MarkdownCotext";
import Img from "../../Img";
import * as S from "./styles";

interface PropsType {
  item: Row;
}

const Image: FC<PropsType> = ({ item }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { id } = item;
  const { removeRowById } = useContext(MarkdownContext);

  const onClick = (e: MouseEvent) => {
    setIsSelected(
      (ref.current && ref.current.contains(e.target as Node)) || false
    );
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isSelected) {
        return;
      }

      if (["Backspace", "Delete"].includes(e.key)) {
        removeRowById(id);
      }
    },
    [removeRowById, isSelected, id]
  );

  useEffect(() => {
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <S.Container>
      <S.ImgContainer ref={ref} onKeyDown={() => console.log("keydown")}>
        <S.Image src={item.text} />
        {isSelected && <S.Overlay />}
      </S.ImgContainer>
    </S.Container>
  );
};

export default Image;
