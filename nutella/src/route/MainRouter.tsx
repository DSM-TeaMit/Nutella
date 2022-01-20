import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SearchContainer, LoginContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/search" element={<SearchContainer />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
