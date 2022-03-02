import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  LoginContainer,
  SignupContainer,
  TeacherLoginContainer,
  SignLoadingContainer,
  GithubLoadingContainer,
} from "../container";
import RouterWithDefaultComponent from "./RouterWithDefaultComponent";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*">
          <Route path="" element={<LoginContainer />} />
          <Route
            path="auth/callback-google"
            element={<SignLoadingContainer />}
          />
          <Route
            path="auth/callback-github"
            element={<GithubLoadingContainer />}
          />
          <Route path="signup" element={<SignupContainer />} />
          <Route path="teacherlogin" element={<TeacherLoginContainer />} />
          <Route path="*" element={<RouterWithDefaultComponent />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
