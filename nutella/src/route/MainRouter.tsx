import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<div>hello world</div>} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
