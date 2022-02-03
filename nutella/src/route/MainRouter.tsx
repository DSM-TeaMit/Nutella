import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SearchContainer, LoginContainer, MypageContainer, PlanContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*">
          <Route path="" element={<LoginContainer />} />
          <Route path="search" element={<SearchContainer />} />
          <Route path="mypage/*" element={<MypageContainer />} />
          <Route path="project/:id/*">
            <Route path="" element={<div>this is project</div>} />
            <Route path="plan" element={<PlanContainer />} />
            <Route path="result" element={<div>this is project result</div>} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
