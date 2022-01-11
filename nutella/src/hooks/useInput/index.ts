import React, { useCallback, useEffect, useState } from "react";
import State from "../../interface/State";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

type Dispatch = [InputProps, State<string>];

const useInput = (initValue?: string, debug?: boolean): Dispatch => {
  const [value, setValue] = useState<string>(initValue || "");

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
