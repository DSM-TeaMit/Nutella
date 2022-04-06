import React, { useEffect, useState } from "react";
import { State } from "../interface";

type Value = string | number;

export type NameTypes = {
  [key in string]: Value;
};

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: Value;
}

type DispatchInputProps<T> = {
  [key in keyof T]: InputProps;
};

const useInputs = <T extends NameTypes>(
  initValue: T,
  debug?: boolean
): [DispatchInputProps<T>, State<T>] => {
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

  const inputProps = Object.keys(value).map((key) => {
    return { onChange: onChange, name: key, value: value[key] };
  });

  return [
    Object.keys(value).reduce(
      (acc, curr, index) => ((acc[curr as keyof T] = inputProps[index]), acc),
      {} as DispatchInputProps<T>
    ),
    [value, setValue],
  ];
};

export default useInputs;
