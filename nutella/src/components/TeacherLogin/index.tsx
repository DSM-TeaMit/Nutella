import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { LeftArrow } from "../../assets/icons";
import { BlueButton } from "../Buttons";
import Input from "../Input";
import useInputs, { NameTypes } from "../../hooks/useInputs";
import { useAdminLogin } from "../../queries/Login";
import toast from "react-hot-toast";
import storageKeys from "../../constant/StorageKeys";
import { AxiosResponse } from "axios";
import { TokenType } from "../../utils/api/Signup";
import useTitle from "../../hooks/useTitle";
        
interface InputType extends NameTypes {
  id: string;
  password: string;
}

const TeacherLogin = () => {
  const navigate = useNavigate();
  const adminLoginMutation = useAdminLogin();
  const [inputProps, [inputs, setInputs]] = useInputs<InputType>({
    id: "",
    password: "",
  });

  const getDateWithAddHour = (hour: number) => {
    const date = new Date();
    date.setHours(date.getHours() + hour);
    return date;
  };

  const onSubmitSuccess = (data: AxiosResponse<TokenType, unknown>) => {
    setInputs({ id: "", password: "" });
    toast.success("로그인에 성공하였습니다.");
    const { accessToken, refreshToken } = data.data;
    localStorage.setItem(storageKeys.accessToken, accessToken);
    localStorage.setItem(storageKeys.refreshToken, refreshToken);
    localStorage.setItem(
      storageKeys.expireAt,
      getDateWithAddHour(24).toString()
    );
    navigate("/pending-report");
  };

  const onSubmitError = () => {
    setInputs({ id: "", password: "" });
    toast.error("로그인에 실패하셨습니다.");
  };

  const onLogin = () => {
    adminLoginMutation.mutate(
      { id: inputs.id, password: inputs.password },
      { onSuccess: onSubmitSuccess, onError: onSubmitError }
    );
  };

  useTitle("선생님으로 로그인");

  return (
    <S.TeacherLoginContent>
      <S.Title>선생님 로그인</S.Title>
      <S.Box>
        <S.SubTitle>아이디</S.SubTitle>
        <Input placeholder="아이디를 입력해 주세요..." {...inputProps["id"]} />
      </S.Box>
      <S.Box>
        <S.SubTitle>비밀번호</S.SubTitle>
        <Input
          placeholder="비밀번호를 입력해 주세요..."
          {...inputProps["password"]}
        />
      </S.Box>
      <S.ClickBox>
        <Link to="/">
          <S.LoginText>
            <img src={LeftArrow} />
            <span>학생 로그인</span>
          </S.LoginText>
        </Link>
        <BlueButton onClick={onLogin}>로그인</BlueButton>
      </S.ClickBox>
    </S.TeacherLoginContent>
  );
};

export default TeacherLogin;
