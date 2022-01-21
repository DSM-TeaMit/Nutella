import { FC, useCallback, useEffect, useMemo, useState } from "react";
import * as S from "./styles";

const TagInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const [tags, setTags] = useState<string[]>([]);

  const { value, onChange } = props;

  const renderValue = useMemo(() => value?.toString().split(" ").reverse()[0], [value]);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.split(" ").length > 1) {
        const newTags = e.target.value.split(" ");
        newTags.pop();
        setTags([...tags, ...newTags]);
      }

      onChange && onChange(e);
    },
    [onChange, tags]
  );

  useEffect(() => {
    console.log(tags);
  }, [tags]);

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

  return (
    <div>
      <S.InvisibleInput />
      <S.InputStyle
        {...props}
        value={renderValue}
        onChange={onChangeHandler}
        onKeyDown={onKeydown}
      />
      <S.Line />
    </div>
  );
};

export default TagInput;
