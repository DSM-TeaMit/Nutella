import React, { useCallback, useEffect, useState } from "react";
import { Tag } from "../components/TagInput";
import State from "../interface/State";

type Value = string | number;

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: Value;
  clearValue: () => void;
  tagState: State<Tag[]>;
}

type Dispatch = [InputProps, State<Tag[]>];

const useTagInput = (initValue?: Value, initTagValue?: Tag[], debug?: boolean): Dispatch => {
  const [value, setValue] = useState<Value>(initValue || "");
  const [tags, setTags] = useState<Tag[]>(initTagValue || []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (debug) {
      console.log(tags);
    }
  }, [debug, tags]);

  const clearValue = useCallback(() => {
    setValue("");
  }, []);

  return [{ onChange, value, clearValue, tagState: [tags, setTags] }, [tags, setTags]];
};

export default useTagInput;
