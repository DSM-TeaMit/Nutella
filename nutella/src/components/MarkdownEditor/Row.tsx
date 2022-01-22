import { useEffect, useRef, useState } from "react";

const Row = ({ setCount, count }: { setCount: (value: number) => void; count: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      setCount(count + 1);
    }

    if (e.key === "Backspace" && value === "") {
      setCount(count - 1);
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
