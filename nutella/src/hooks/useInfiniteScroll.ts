import { useCallback, useEffect, useRef } from "react";

const useInfiniteScroll = <T extends HTMLElement>(
  onNextPage: () => void,
  enabled: boolean
) => {
  const ref = useRef<T>(null);
  const canLoadMore = useRef<boolean>(true);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting && canLoadMore.current && enabled) {
        onNextPage();

        canLoadMore.current = false;

        setTimeout(() => {
          canLoadMore.current = true;
        }, 50);
      }
    },
    [onNextPage, enabled]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (ref.current) observer.observe(ref.current);
  }, [handleObserver]);

  return ref;
};

export default useInfiniteScroll;
