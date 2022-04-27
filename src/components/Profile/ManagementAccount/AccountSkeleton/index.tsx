import * as S from "./styles";

const AccountSkeleton = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Image />
        <S.InfoContainer>
          <S.Name>123123 선생님</S.Name>
          <S.Gray>ID : 123123</S.Gray>
        </S.InfoContainer>
      </S.Left>
    </S.Container>
  );
};

export default AccountSkeleton;
