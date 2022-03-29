import { useMutation } from "react-query";
import { FeedType, getFeed } from "../utils/api/Feed";

export const useFeed = () => useMutation((data: FeedType) => getFeed(data), {});
