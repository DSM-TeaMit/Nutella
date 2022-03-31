import Feed from "../components/Feed";
import useTitle from "../hooks/useTitle";

const FeedContainer = () => {
  useTitle("피드");

  return <Feed />;
};

export default FeedContainer;
