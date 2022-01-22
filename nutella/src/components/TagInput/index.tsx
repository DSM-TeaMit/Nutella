import { FC, useCallback, useMemo, useState } from "react";
import uniqueId from "../../constant/UniqueId";
import * as S from "./styles";

interface Tag {
  id: string;
  value: string;
}

const TagInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const [tags, setTags] = useState<Tag[]>([]);

  const { value, onChange } = props;

  const renderValue = useMemo(() => value?.toString().split(" ").reverse()[0], [value]);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.replace(/ +/g, " "); //연속된 공백을 하나로 합치기
      e.target.value = e.target.value.replace(/^\s*/, ""); //앞 공백 제거

      if (e.target.value.split(" ").length > 1) {
        const newTags: Tag[] = e.target.value
          .split(" ")
          .map((value) => ({ id: uniqueId(), value: value }));
        newTags.pop();
        setTags([...tags, ...newTags]);
      }

      onChange && onChange(e);
    },
    [onChange, tags]
  );

  const onKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && (!renderValue || renderValue === "")) {
        const copyTags = [...tags];
        copyTags.pop();
        setTags(copyTags);
      }
    },
    [renderValue, tags]
  );

  const onFocusOut = useCallback(() => {
    const fixedValue = renderValue?.replace(/ +/g, " ")?.replace(/^\s*/, "") || "";

    if (fixedValue === "") {
      return;
    }

    setTags([...tags, ...fixedValue.split(" ").map((value) => ({ id: uniqueId(), value: value }))]);
  }, [renderValue, tags]);

  return (
    <div>
      <S.Container>
        {tags.map((value) => (
          <S.Tag key={value.id}>{value.value.replace(/_/g, " ")}</S.Tag>
        ))}
        <S.InputStyle
          {...props}
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
