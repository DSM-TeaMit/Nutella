import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  FeedContainer,
  MypageContainer,
  PendingReportContainer,
  PlanContainer,
  ProjectDetailContainer,
  ResultContainer,
  SearchContainer,
  UserContainer,
  ManagementAccountContainer,
} from "../container";
import Page404 from "../container/Page404";

const RouterWithDefaultComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="search" element={<SearchContainer />} />
        <Route path="feed" element={<FeedContainer />} />
        <Route path="admin-mypage" element={<ManagementAccountContainer />} />
        <Route path="mypage/*" element={<MypageContainer />} />
        <Route path="user/:uuid/*" element={<UserContainer />} />
        <Route path="project/:uuid/*">
          <Route path="" element={<ProjectDetailContainer />} />
          <Route path="plan" element={<PlanContainer />} />
          <Route path="result" element={<ResultContainer />} />
        </Route>
        <Route path="pending-report" element={<PendingReportContainer />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterWithDefaultComponent;
