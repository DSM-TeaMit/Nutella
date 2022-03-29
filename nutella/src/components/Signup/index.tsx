import * as S from "./styles";
import { LeftArrow } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../queries/Signup";
import { BlueButton } from "../Buttons";
import useInputs, { NameTypes } from "../../hooks/useInputs";
import Input from "../Input";
import toast from "react-hot-toast";
import { useCallback, useMemo } from "react";
import useTitle from "../../hooks/useTitle";
import githubOauthUrl from "../../constant/GithubOAuth";

interface InputType extends NameTypes {
  no: string;
  name: string;
  githubId: string;
}

const Signup = () => {
  const infoMutation = useUserInfo();
  const navigate = useNavigate();
  const [inputProps, [inputs, setInputs]] = useInputs<InputType>({
    no: "",
    name: "",
    githubId: "",
  });
  const { no, name, githubId } = inputs;

  useTitle("회원가입");

  const onSubmitSuccess = useCallback(() => {
    setInputs({ no: "", name: "", githubId: "" });
    toast.success("회원가입에 성공하였습니다.");
    navigate("/feed");
  }, [navigate, setInputs]);

  const onSubmit = useCallback(() => {
    infoMutation.mutate(
      { data: { studentNo: Number.parseInt(no), name: name } },
      { onSuccess: onSubmitSuccess }
    );
  }, [infoMutation, name, no, onSubmitSuccess]);

  const onClickBtn = useCallback(() => {
    if (githubId !== "") {
      //깃허브 아이디를 입력한 경우
      window.location.href = `${githubOauthUrl}?redirectUri=signup/${no}/${name}/${githubId}`;
    } else {
      //깃허브 아이디를 입력하지 않은 경우
      onSubmit();
    }
  }, [githubId, name, no, onSubmit]);

  const isButtonActive = useMemo(() => {
    const studentNoRegex = /[1-3][1-4]((0(?=[1-9])|1|2(?=[0-1]))[0-9])/;

    return name === "" || !studentNoRegex.test(no);
  }, [name, no]);

  return (
    <S.SignupContent>
      <S.Title>정보입력</S.Title>
      <S.Box>
        <S.SubTitle>학번</S.SubTitle>
        <Input
          type="text"
          placeholder="학번을 입력해 주세요..."
          {...inputProps["no"]}
        />
      </S.Box>
      <S.Box>
        <S.SubTitle>이름</S.SubTitle>
        <Input
          type="text"
          placeholder="이름을 입력해 주세요..."
          {...inputProps["name"]}
        />
      </S.Box>
      <S.Box>
        <S.SubTitle>Github 아이디(선택)</S.SubTitle>
        <Input
          type="text"
          placeholder="Github 아이디를 입력해 주세요..."
          {...inputProps["githubId"]}
        />
      </S.Box>
      <S.ClickBox>
        <Link to="/">
          <S.LoginText>
            <img src={LeftArrow} />
            <span>로그인</span>
          </S.LoginText>
        </Link>
        <BlueButton onClick={onClickBtn} disabled={isButtonActive}>
          {githubId === "" ? "회원가입" : "Github 인증"}
        </BlueButton>
      </S.ClickBox>
    </S.SignupContent>
  );
};

export default Signup;
