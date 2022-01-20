import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SearchContainer, LoginContainer, MypageContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/mypage/*" element={<MypageContainer />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
