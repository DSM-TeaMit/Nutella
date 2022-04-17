import { FC, Fragment } from "react";
import { SearchedUser } from "../../utils/api/User";
import * as S from "./styles";

const Member: FC<SearchedUser> = ({ name, studentNo }) => {
  return (
    <Fragment>
      <S.MemberContainer>
        <S.ProfileImage />
        <S.Name>
          {studentNo} {name}
        </S.Name>
      </S.MemberContainer>
      <S.Line />
    </Fragment>
  );
};

export default Member;
