import { useCallback, useEffect, useRef } from "react";

const useOuterClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  const onOuterClick = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!ref.current.contains(e.target as Node)) {
        e.stopPropagation();
        e.preventDefault();

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
