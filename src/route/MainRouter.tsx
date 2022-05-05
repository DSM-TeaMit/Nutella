import { FC, Suspense, useCallback } from "react";
import { useQueryClient } from "react-query";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  LoginContainer,
  SignupContainer,
  TeacherLoginContainer,
  SignLoadingContainer,
  GithubLoadingContainer,
  ChangeGithubIdLoadingContainer,
} from "../container";
import { RefreshError } from "../interface";
import RouterWithDefaultComponent from "./RouterWithDefaultComponent";
import toast from "react-hot-toast";
import storageKeys from "../constant/StorageKeys";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*" element={<SubRouter />} />
      </Routes>
    </Suspense>
  );
};

const SubRouter = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onError = useCallback(
    (error: unknown) => {
      if (error instanceof RefreshError) {
        toast.error(error.message);
        navigate("/");
        localStorage.removeItem(storageKeys.accessToken);
        localStorage.removeItem(storageKeys.refreshToken);
        localStorage.removeItem(storageKeys.expireAt);
      }
    },
    [navigate]
  );

  queryClient.setDefaultOptions({ queries: { onError, retry: false } });

  return (
    <Routes>
      <Route path="" element={<LoginContainer />} />
      <Route path="auth/callback-google" element={<SignLoadingContainer />} />
      <Route path="auth/callback-github/signup/:no/:name/:githubId" element={<GithubLoadingContainer />} />
      <Route path="auth/callback-github/github-id/:githubId" element={<ChangeGithubIdLoadingContainer />} />
      <Route path="signup" element={<SignupContainer />} />
      <Route path="teacherlogin" element={<TeacherLoginContainer />} />
      <Route path="*" element={<RouterWithDefaultComponent />} />
    </Routes>
  );
};

export default MainRouter;
