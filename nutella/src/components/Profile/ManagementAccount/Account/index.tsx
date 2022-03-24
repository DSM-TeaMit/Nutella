import { FC, useCallback } from "react";
import { AccountType } from "../../../../utils/api/Admin";
import * as S from "./styles";

interface PropsType {
  data: AccountType;
}

const Account: FC<PropsType> = ({ data }) => {
  const { emoji, name, uid } = data;

  const onDelete = useCallback(() => {
    if (window.confirm("삭제하시겠습니까?")) {
      //계정 삭제
    }
  }, []);

  return (
    <S.Container>
      <S.Left>
        <S.Image emoji={emoji} />
        <S.InfoContainer>
          <S.Name>{name} 선생님</S.Name>
          <S.Gray>ID : {uid}</S.Gray>
        </S.InfoContainer>
      </S.Left>
      <S.Delete onClick={onDelete}>삭제</S.Delete>
    </S.Container>
  );
};

export default Account;
