import { FC, useEffect, useRef, useState } from "react";
import { Row as RowType } from "../../context/MarkdownCotext";

interface PropsType {
  data: RowType;
}

const Row: FC<PropsType> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      e.preventDefault();
    }

    if (e.key === "Backspace" && value === "") {
    }
  };

  return (
    <div
      ref={ref}
      onKeyDown={onKeyDown}
      contentEditable
      onInput={(e) => setValue((e.target as Node).textContent || "")}
    />
  );
};

export default Row;
