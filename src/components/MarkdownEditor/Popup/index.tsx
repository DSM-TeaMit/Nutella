import { FC, useCallback, useContext, useMemo, useRef } from "react";
import { MarkdownContext } from "../../../context/MarkdownCotext";
import { postImage } from "../../../utils/api/Image";
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
  const { changeRowType, setRows, rows } = useContext(MarkdownContext);
  const fileSelecterRef = useRef<HTMLInputElement>(null);

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
    [changeRowType, id]
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

  const onImageSelectClick = useCallback(() => {
    fileSelecterRef.current?.click();
  }, []);

  const onImageChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      e.preventDefault();

      if (!e.target.files) {
        return;
      }

      const file = e.target.files[0];

      const { data: url } = await postImage(
        file,
        "0ecfaf8f-62f5-4a13-ba01-76966aa98e13"
      );

      const index = rows.findIndex((value) => value.id === id);
      const copyRows = [...rows];

      copyRows[index].type = "image";
      copyRows[index].text = url;

      setRows(copyRows);
    },
    [id, setRows, rows]
  );

  return (
    <S.PopUp className="popup">
      <S.PopupRowTitle>행 종류</S.PopupRowTitle>
      <S.PopupRowOuter>
        {renderPopupRow}
        <S.PopupRowContainer onClick={onImageSelectClick}>
          <S.PopupRowTitle>이미지</S.PopupRowTitle>
          <S.PopupRowDescription>
            <div>선택한 이미지 파일을 추가합니다</div>
          </S.PopupRowDescription>
        </S.PopupRowContainer>
        <S.FileSelecter
          ref={fileSelecterRef}
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={onImageChange}
        />
      </S.PopupRowOuter>
    </S.PopUp>
  );
};

export default Popup;
