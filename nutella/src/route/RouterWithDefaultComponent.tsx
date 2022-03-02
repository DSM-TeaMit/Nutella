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
} from "../container";

const RouterWithDefaultComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="search" element={<SearchContainer />} />
        <Route path="feed" element={<FeedContainer />} />
        <Route path="mypage/*" element={<MypageContainer />} />
        <Route path="user/:id/*" element={<UserContainer />} />
        <Route path="project/:id/*">
          <Route path="" element={<ProjectDetailContainer />} />
          <Route path="plan" element={<PlanContainer />} />
          <Route path="result" element={<ResultContainer />} />
        </Route>
        <Route path="pending-report" element={<PendingReportContainer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterWithDefaultComponent;
