import { FC, useContext, useMemo } from "react";
import { MarkdownContext } from "../../../context/MarkdownCotext";
import * as S from "./styles";

interface PopupItem {
  title: string;
  description: string[];
  onClick: () => void;
}

interface PropsType {
  id: string;
}

const Popup: FC<PropsType> = ({ id }) => {
  const { changeRowType } = useContext(MarkdownContext);

  const popupItems = useMemo<PopupItem[]>(
    () => [
      {
        title: "제목 1",
        description: ["2.25rem | 굵음", "단축 : #"],
        onClick: () => changeRowType(id, "h1"),
      },
      {
        title: "제목 2",
        description: ["1.75rem | 굵음", "단축 : ##"],
        onClick: () => changeRowType(id, "h2"),
      },
      {
        title: "제목 3",
        description: ["1.5rem | 굵음", "단축 : ###"],
        onClick: () => changeRowType(id, "h3"),
      },
      {
        title: "제목 4",
        description: ["1.25rem | 중간", "단축 : ####"],
        onClick: () => changeRowType(id, "h4"),
      },
      {
        title: "제목 5",
        description: ["1.25rem | 중간", "단축 : #####"],
        onClick: () => changeRowType(id, "h5"),
      },
      {
        title: "제목 6",
        description: ["1rem | 굵음", "단축 : ######"],
        onClick: () => changeRowType(id, "h6"),
      },
      {
        title: "인용",
        description: ["1rem | 표준", "단축 : >"],
        onClick: () => changeRowType(id, "blockquote"),
      },
      {
        title: "순서 있는 목록",
        description: ["1rem | 표준", "단축 : {아무 숫자}."],
        onClick: () => changeRowType(id, "ol"),
      },
      {
        title: "순서 없는 목록",
        description: ["1rem | 표준", "단축 : -"],
        onClick: () => changeRowType(id, "ul"),
      },
    ],
    []
  );

  const renderPopupRow = useMemo(
    () =>
      popupItems.map((value, index) => {
        const { title, description, onClick } = value;
        return (
          <S.PopupRowContainer onClick={onClick} key={`popup_${index}`}>
            <S.PopupRowTitle>{title}</S.PopupRowTitle>
            <S.PopupRowDescription>
              {description.map((value, index) => (
                <div key={`desc_${index}`}>{value}</div>
              ))}
            </S.PopupRowDescription>
          </S.PopupRowContainer>
        );
      }),
    [popupItems]
  );

  return (
    <S.PopUp className="popup">
      <S.PopupRowTitle>행 종류</S.PopupRowTitle>
      <S.PopupRowOuter>{renderPopupRow}</S.PopupRowOuter>
    </S.PopUp>
  );
};

export default Popup;
