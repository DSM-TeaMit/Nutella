import { useMemo } from "react";
import { InfiniteData } from "react-query";
import Page from "../interface/Page";

export interface List<T> {
  list: T[];
  count: number;
}

const usePagination = <T>(data: InfiniteData<Page<List<T>>> | undefined, initPage: number) => {
  const list = useMemo(() => {
    if (!data) {
      return undefined;
    }

    const l: T[] = [];

    data.pages.forEach((value) => l.push(...value.data.list));

    return l;
  }, [data]);

  const count = useMemo(() => {
    if (!data || data.pages.length <= 0) {
      return undefined;
    }

    return data.pages[0].data.count;
  }, [data]);

  const prevPage = useMemo(() => {
    if (!data || data.pages.length <= 0) {
      return initPage;
    }

    return data.pages[data.pages.length - 1].page;
  }, [data, initPage]);

  return { list, count, prevPage };
};

export default usePagination;
