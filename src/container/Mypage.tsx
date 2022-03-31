import MyPage from "../components/Profile/Mypage";
import useTitle from "../hooks/useTitle";

const MypageContainer = () => {
  useTitle("마이 페이지");

  return <MyPage />;
};

export default MypageContainer;
