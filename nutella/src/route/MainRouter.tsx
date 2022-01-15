import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
