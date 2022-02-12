import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  SearchContainer,
  LoginContainer,
  MypageContainer,
  UserContainer,
  SignupContainer,
  ProjectDetailContainer,
  TeacherLoginContainer,
  FeedContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*">
          <Route path="" element={<LoginContainer />} />
          <Route path="signup" element={<SignupContainer />} />
          <Route path="teacherlogin" element={<TeacherLoginContainer />} />
          <Route path="search" element={<SearchContainer />} />
          <Route path="feed" element={<FeedContainer />} />
          <Route path="mypage/*" element={<MypageContainer />} />
          <Route path="user/:id/*" element={<UserContainer />} />
          <Route path="project/:id/" element={<ProjectDetailContainer />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
