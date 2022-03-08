import axios from "axios";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useUserInfo } from "../../queries/Signup";
import * as S from "./styles";

const GithubLoadingContainer = () => {
  const { no, githubId, name } = useParams<{
    no: string;
    name: string;
    githubId: string;
  }>();

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
        toast.error("깃허브 인증한 아이디와 입력한 아이디가 다릅니다.");
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
      { name, studentNo: no!, githubId },
      { onSuccess, onError }
    );
  }, [githubId, infoMutation, name, navigate, no, onError, onSuccess]);

  useEffect(() => {
    onLand();
  }, [onLand]);

  return (
    <>
      <S.Container>
        <div>
          <S.Title>인증중입니다...</S.Title>
          <S.Description>잠시만 기다려주세요.</S.Description>
        </div>
      </S.Container>
    </>
  );
};

export default GithubLoadingContainer;
