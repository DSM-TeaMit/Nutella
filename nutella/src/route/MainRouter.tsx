import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SearchContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<div>hello world</div>} />
        <Route path="/search" element={<SearchContainer />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
