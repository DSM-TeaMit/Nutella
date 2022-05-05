import axios from "axios";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useUserInfo } from "../queries/Signup";

const GithubLoadingContainer = () => {
  const { no, githubId, name } = useParams<{
    no: string;
    name: string;
    githubId: string;
  }>();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const infoMutation = useUserInfo();

  const onSuccess = useCallback(() => {
    toast.success("회원가입 성공!");
    navigate("/");
  }, [navigate]);

  const onError = useCallback(
    (err: unknown) => {
      if (!axios.isAxiosError(err) || !err.response) {
        toast.error("회원가입 오류. 다시 시도해주세요.");
        navigate("/");
        return;
      }

      const { status } = err.response;

      if (status === 422) {
        toast.error("깃허브 인증되지 않은 아이디입니다.");
      } else if (status === 403) {
        toast.error("다른 사용자가 인증한 아이디입니다.");
      }
      toast.error("다시 회원가입해주세요.");
      navigate("/");
    },
    [navigate]
  );

  const onLand = useCallback(() => {
    if (!no || !name || !githubId) {
      toast.error("잘못된 접근 방식입니다.");
      navigate("/");
      return;
    }

    infoMutation.mutate(
      {
        data: { name, studentNo: Number.parseInt(no!), githubId },
        code: searchParams.get("code") || "",
      },
      { onSuccess, onError }
    );
  }, [githubId, infoMutation, name, navigate, no, onError, onSuccess, searchParams]);

  useEffect(() => {
    onLand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loading />;
};

export default GithubLoadingContainer;
