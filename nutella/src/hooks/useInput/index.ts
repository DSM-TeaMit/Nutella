import React, { useCallback, useEffect, useState } from "react";
import State from "../../interface/State";

type Value = string | number;

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: Value;
}

type Dispatch = [InputProps, State<Value>];

const useInput = (initValue?: Value, debug?: boolean): Dispatch => {
  const [value, setValue] = useState<Value>(initValue || "");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (debug) {
      console.log(value);
    }
  }, [debug, value]);

  return [{ onChange, value }, [value, setValue]];
};

export default useInput;
