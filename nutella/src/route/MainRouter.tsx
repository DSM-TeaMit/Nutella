import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes></Routes>
    </Suspense>
  );
};

export default MainRouter;
