import React, { useEffect, useState } from "react";
import State from "../../interface/State";

type Value = string | number;

export type NameTypes = {
  [key in string]: Value;
};

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: Value;
}

const useInputs = <T extends NameTypes>(
  initValue: T,
  debug?: boolean
): [InputProps[], State<T>] => {
  const [value, setValue] = useState<T>(initValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: v } = e.target;
    setValue({ ...value, [name]: v });
  };

  useEffect(() => {
    if (debug) {
      console.log(value);
    }
  }, [debug, value]);

  return [
    Object.keys(value).map((key) => {
      return { onChange: onChange, name: key, value: value[key] };
    }),
    [value, setValue],
  ];
};

export default useInputs;
