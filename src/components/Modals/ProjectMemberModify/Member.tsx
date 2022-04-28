import { FC, Fragment } from "react";
import useTagInput from "../../../hooks/useTagInput";
import { SearchedUser } from "../../../utils/api/User";
import TagInput from "../../TagInput";
import { UserWithRole } from "../ProejctAdd";
import * as S from "./styles";

interface PropsType {
  data: SearchedUser & UserWithRole;
}

const MemberWithRole: FC<PropsType> = ({ data }) => {
  const [inputProps] = useTagInput("", [...data.tags]);

  return (
    <Fragment>
      <S.MyProfile>
        <S.User>
          <img src={data.thumbnailUrl} />
          <span>{data.studentNo} </span>
          <span>{data.name}</span>
        </S.User>
      </S.MyProfile>
      <S.RollBox>
        <TagInput placeholder="공백으로 분야를 구분할 수 있습니다..." {...inputProps} />
      </S.RollBox>
    </Fragment>
  );
};

export default MemberWithRole;
