import * as S from "./styles";
import { LeftArrow } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../queries/Signup";
import BlueButton from "../Buttons/BlueButton";
import useInputs, { NameTypes } from "../../hooks/useInputs";
import Input from "../Input";
import toast from "react-hot-toast";
import { useCallback } from "react";

interface InputType extends NameTypes {
  no: string;
  name: string;
  githubId: string;
}

const githubOauthUrl = "https://spectre-psnldev.dev:8202/auth/github" as const;

const Signup = () => {
  const infoMutation = useUserInfo();
  const navigate = useNavigate();
  const [inputProps, [inputs, setInputs]] = useInputs<InputType>({
    no: "",
    name: "",
    githubId: "",
  });
  const { no, name, githubId } = inputs;

  const onSubmitSuccess = useCallback(() => {
    setInputs({ no: "", name: "", githubId: "" });
    toast.success("회원가입에 성공하였습니다.");
    navigate("/");
  }, [navigate, setInputs]);

  const onSubmit = useCallback(() => {
    infoMutation.mutate(
      { studentNo: no, name: name },
      { onSuccess: onSubmitSuccess }
    );
  }, [infoMutation, name, no, onSubmitSuccess]);

  const onClickBtn = useCallback(() => {
    if (githubId !== "") {
      //깃허브 아이디를 입력한 경우
      window.location.href = githubOauthUrl;
    } else {
      //깃허브 아이디를 입력하지 않은 경우
      onSubmit();
    }
  }, [githubId, onSubmit]);

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
        <BlueButton onClick={onClickBtn}>
          {githubId === "" ? "회원가입" : "Github 인증"}
        </BlueButton>
      </S.ClickBox>
    </S.SignupContent>
  );
};

export default Signup;
