import { useCallback, useEffect } from "react";

const useTitle = (title: string) => {
  const updateTitle = useCallback(() => {
    const htmlTitle = document.querySelector("title");

    if (!htmlTitle) {
      return;
    }

    htmlTitle.innerHTML = `${title} - Teamit`;
  }, [title]);

  useEffect(updateTitle, [updateTitle]);
};

export default useTitle;
