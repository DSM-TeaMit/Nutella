import * as S from "./styles";
import { LeftArrow } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo } from "../../queries/Signup";
import BlueButton from "../Buttons/BlueButton";
import useInputs, { NameTypes } from "../../hooks/useInputs";

interface InputType extends NameTypes {
  no: string;
  name: string;
  githubId: string;
}

const Signup = () => {
  const infoMutation = useUserInfo();
  const navigate = useNavigate();
  const [inputProps, [inputs, SetInputs]] = useInputs<InputType>({
    no: "",
    name: "",
    githubId: "",
  });
  const { no, name, githubId } = inputs;

  const onClickBtn = () => {
    if (githubId !== "") {
      const OauthUrl = "https://spectre-psnldev.dev:8202/auth/github";
      window.location.href = OauthUrl;
    } else {
      onSubmit();
    }
  };

  const onSubmit = () => {
    infoMutation.mutate(
      { studentNo: no, name: name, githubId: githubId },
      { onSuccess: onSubmitSuccess }
    );
  };

  const onSubmitSuccess = () => {
    SetInputs({ no: "", name: "", githubId: "" });
    navigate("/feed");
  };

  return (
    <S.SignupContent>
      <S.Title>정보입력</S.Title>
      <S.Box>
        <S.SubTitle>학번</S.SubTitle>
        <S.Input
          type="text"
          placeholder="학번을 입력해 주세요..."
          {...inputProps[no]}
        />
      </S.Box>
      <S.Box>
        <S.SubTitle>이름</S.SubTitle>
        <S.Input
          type="text"
          placeholder="이름을 입력해 주세요..."
          {...inputProps[name]}
        />
      </S.Box>
      <S.Box>
        <S.SubTitle>Github 아이디(선택)</S.SubTitle>
        <S.Input
          type="text"
          placeholder="Github 아이디를 입력해 주세요..."
          {...inputProps[githubId]}
        />
      </S.Box>
      <S.ClickBox>
        <Link to="/">
          <S.LoginText>
            <img src={LeftArrow} />
            <span>로그인</span>
          </S.LoginText>
        </Link>
        <BlueButton onClick={onClickBtn}>회원가입</BlueButton>
      </S.ClickBox>
    </S.SignupContent>
  );
};

export default Signup;