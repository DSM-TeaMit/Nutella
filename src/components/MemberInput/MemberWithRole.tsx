import { FC } from "react";
import useTagInput from "../../hooks/useTagInput";
import { SearchedUser } from "../../utils/api/User";
import TagInput from "../TagInput";
import * as S from "./styles";

const MemberWithRole: FC<SearchedUser> = ({
  name,
  studentNo,
  thumbnailUrl,
}) => {
  const [inputProps] = useTagInput("", []);

  return (
    <S.SelectedMember>
      <S.ProfileImage src={thumbnailUrl} />
      <S.Name>
        {studentNo} {name}
      </S.Name>
      <S.Tags>
        <TagInput placeholder="역할 입력..." {...inputProps} />
      </S.Tags>
      <S.Remove>삭제</S.Remove>
    </S.SelectedMember>
  );
};

export default MemberWithRole;
