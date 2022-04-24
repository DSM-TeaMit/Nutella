import { FC, useState } from "react";
import { State } from "../../../interface";
import * as S from "./styles";

interface PropsType {
  type: string;
  total: number;
  keyword: string;
}

const Pagination: FC<PropsType> = ({ total, type, keyword }) => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const contentCount = 5;

  console.log(pageIndex);

  const clickPrev = () => {
    if (page !== 0) {
      setPage(page - 1);
      setPageIndex(page - 1);
    }
  };

  const clickNext = () => {
    alert("ekdma");
    if (page !== total) {
      setPage(page + 1);
      setPageIndex(page);
    }
  };

  const contentPage = Array(contentCount)
    .fill(0)
    .map((_, index) => {
      const pageIndex = page + index;

      if (pageIndex < total) {
        if (pageIndex === total) {
          return (
            <S.ClcikContent key={index} onClick={() => setPageIndex(pageIndex)}>
              {pageIndex + 1}
            </S.ClcikContent>
          );
        } else return <S.ClcikContent>{pageIndex + 1}</S.ClcikContent>;
      } else return <S.ClcikContent>.</S.ClcikContent>;
    });

  return (
    <>
      <S.PaginationContainer>
        <S.ClcikContent onClick={clickPrev}>이전</S.ClcikContent>
        {contentPage}
        <S.ClcikContent onClick={clickNext}>다음 </S.ClcikContent>
      </S.PaginationContainer>
    </>
  );
};

export default Pagination;
