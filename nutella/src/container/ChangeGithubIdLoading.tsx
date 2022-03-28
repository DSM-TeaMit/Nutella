import axios from "axios";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useModifyGithubId } from "../queries/User";

const ChangeGithubIdLoadingContainer = () => {
  const { githubId } = useParams<{
    githubId: string;
  }>();
  const navigate = useNavigate();
  const mutation = useModifyGithubId();

  const onSuccess = useCallback(() => {
    toast.success("깃허브 아이디 변경 성공");
    navigate("/mypage/setting");
  }, [navigate]);

  const onError = useCallback(
    (err: unknown) => {
      if (!axios.isAxiosError(err) || !err.response) {
        toast.error("오류 발생. 다시 시도해주세요.");
        navigate("/mypage/setting");
        return;
      }

      const { status } = err.response;

      if (status === 422) {
        toast.error("깃허브 인증되지 않은 아이디입니다.");
      } else if (status === 403) {
        toast.error("다른 사용자가 인증한 아이디입니다.");
      }
      toast.error("다시 변경해주세요.");
      navigate("/mypage/setting");
    },
    [navigate]
  );

  const onLand = useCallback(() => {
    if (!githubId) {
      toast.error("오류 발생. 깃허브 아이디를 입력해주세요.");
      navigate("/");
      return;
    }

    mutation.mutate(githubId, { onSuccess, onError });
  }, [githubId, mutation, navigate, onError, onSuccess]);

  useEffect(() => {
    onLand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loading />;
};

export default ChangeGithubIdLoadingContainer;
