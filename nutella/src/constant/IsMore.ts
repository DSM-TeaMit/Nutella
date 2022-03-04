const isMore = (limit: number, page: number, count: number): boolean => {
  return limit * page < count;
};

export default isMore;
