import { useCallback, useLayoutEffect } from "react";

const useTitle = (title: string) => {
  const updateTitle = useCallback(() => {
    const htmlTitle = document.querySelector("title");

    if (!htmlTitle) {
      return;
    }

    htmlTitle.innerHTML = `${title} - Teamit`;
  }, [title]);

  useLayoutEffect(updateTitle, [updateTitle]);
};

export default useTitle;
