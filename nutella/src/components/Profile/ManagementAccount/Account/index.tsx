import { FC } from "react";
import { AccountType } from "../../../../utils/api/Admin";
import * as S from "./styles";

interface PropsType {
  data: AccountType;
}

const Account: FC<PropsType> = ({ data }) => {
  const { emoji, name, uid, uuid } = data;

  return (
    <S.Container>
      <S.Left>
        <S.Image emoji={emoji} />
        <S.InfoContainer>
          <S.Name>{name} 선생님</S.Name>
          <S.Gray>ID : {uid}</S.Gray>
        </S.InfoContainer>
      </S.Left>
      <S.Delete>삭제</S.Delete>
    </S.Container>
  );
};

export default Account;
