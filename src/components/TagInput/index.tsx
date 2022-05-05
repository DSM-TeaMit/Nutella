import { FC, useCallback, useMemo } from "react";
import uniqueId from "../../constant/UniqueId";
import { State } from "../../interface";
import * as S from "./styles";

export interface Tag {
  id: string;
  value: string;
}

export interface PropsType {
  clearValue: () => void;
  tagState: State<Tag[]> | [Tag[], (tags: Tag[]) => void];
}

const TagInput: FC<React.InputHTMLAttributes<HTMLInputElement> & PropsType> = (props) => {
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = { ...props };
  const { value, onChange, clearValue, tagState } = props;
  const [tags, setTags] = tagState;

  const renderValue = useMemo(() => value?.toString().split(" ").reverse()[0], [value]);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.replace(/ +/g, " "); //연속된 공백을 하나로 합치기
      e.target.value = e.target.value.replace(/^\s*/, ""); //앞 공백 제거

      if (e.target.value.split(" ").length > 1) {
        const newTags: Tag[] = e.target.value.split(" ").map((value) => ({ id: uniqueId(), value: value }));
        newTags.pop();
        setTags([...tags, ...newTags]);
      }

      onChange && onChange(e);
    },
    [onChange, setTags, tags]
  );

  const onKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && (!renderValue || renderValue === "")) {
        const copyTags = [...tags];
        copyTags.pop();
        setTags(copyTags);
      }
    },
    [renderValue, setTags, tags]
  );

  const onFocusOut = useCallback(() => {
    const fixedValue = renderValue?.replace(/ +/g, " ")?.replace(/^\s*/, "") || "";

    if (fixedValue === "") {
      return;
    }

    setTags([...tags, ...fixedValue.split(" ").map((value) => ({ id: uniqueId(), value: value }))]);
    clearValue();
  }, [clearValue, renderValue, setTags, tags]);

  const onTagClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
      e.stopPropagation();
      setTags(tags.filter((value) => value.id !== id));
    },
    [setTags, tags]
  );

  return (
    <div>
      <S.Container>
        {tags.map((value) => (
          <S.Tag key={value.id} onClick={(e) => onTagClick(e, value.id)}>
            {value.value.replace(/_/g, " ")}
          </S.Tag>
        ))}
        <S.InputStyle
          {...inputProps}
          value={renderValue}
          onChange={onChangeHandler}
          onKeyDown={onKeydown}
          onBlur={onFocusOut}
        />
      </S.Container>
      <S.Line />
    </div>
  );
};

export default TagInput;
