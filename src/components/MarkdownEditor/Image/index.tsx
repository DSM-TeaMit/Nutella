import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MarkdownContext, Row } from "../../../context/MarkdownCotext";
import * as S from "./styles";

interface PropsType {
  item: Row;
}

const Image: FC<PropsType> = ({ item }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { id } = item;
  const { removeRowById, addRowAfterId, disabled } =
    useContext(MarkdownContext);

  const onClick = useCallback((e: MouseEvent) => {
    setIsSelected(
      (ref.current && ref.current.contains(e.target as Node)) || false
    );
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isSelected) {
        return;
      }

      if (["Backspace", "Delete"].includes(e.key)) {
        e.stopPropagation();
        e.preventDefault();
        removeRowById(id);
      }

      if (e.key === "Enter") {
        e.stopPropagation();
        e.preventDefault();
        addRowAfterId(id);
        setIsSelected(false);
      }
    },
    [removeRowById, isSelected, id, addRowAfterId]
  );

  useEffect(() => {
    if (!disabled) {
      document.addEventListener("click", onClick);
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [disabled, onClick, onKeyDown]);

  return (
    <S.Container>
      <S.ImgContainer ref={ref}>
        <S.Image src={item.text} displayLoading />
        {isSelected && <S.Overlay />}
      </S.ImgContainer>
    </S.Container>
  );
};

export default Image;
