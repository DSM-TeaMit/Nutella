import { useCallback, useEffect, useRef } from "react";

const useOuterClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  const onOuterClick = useCallback(
    (e: MouseEvent) => {
      console.log("43");
      if (!ref.current) {
        return;
      }

      console.log("123");

      if (!ref.current.contains(e.target as Node)) {
        console.log("4123123");
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", onOuterClick);

    return () => {
      document.removeEventListener("click", onOuterClick);
    };
  }, [onOuterClick]);

  return ref;
};

export default useOuterClick;
