import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MypageContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<div>hello world</div>} />
        <Route path="/mypage" element={<MypageContainer />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
