import * as S from "./styles";

const Account = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Image />
        <S.InfoContainer>
          <S.Name>김진근 선생님</S.Name>
          <S.Gray>ID : kjg2004</S.Gray>
        </S.InfoContainer>
      </S.Left>
      <S.Delete>삭제</S.Delete>
    </S.Container>
  );
};

export default Account;
