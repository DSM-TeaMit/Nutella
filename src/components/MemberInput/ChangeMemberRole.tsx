import { FC, useState } from "react";
import { SearchedUser } from "../../utils/api/User";
import { UserWithRole } from "../Modals/ProejctAdd";
import TagInput, { Tag } from "../TagInput";
import * as S from "./styles";

interface PropsType {
  onRemoveClick: () => void;
  setTag: (tags: Tag[]) => void;
}

const ChangeMemberRole: FC<SearchedUser & UserWithRole & PropsType> = ({
  name,
  studentNo,
  thumbnailUrl,
  onRemoveClick,
  setTag,
  tags,
}) => {
  console.log(tags);
  const [value, setValue] = useState<string>("");
  return (
    <S.MemberContent>
      <S.MemberProfile>
        <S.User>
          <img src={thumbnailUrl} />
          <span>
            {studentNo} {name}
          </span>
        </S.User>
        <S.Delete onClick={onRemoveClick}>삭제</S.Delete>
      </S.MemberProfile>
      <S.MemberBox>
        <S.RollBox>
          <TagInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="역할 입력..."
            clearValue={() => setValue("")}
            tagState={[tags, setTag]}
          />
        </S.RollBox>
      </S.MemberBox>
    </S.MemberContent>
  );
};

export default ChangeMemberRole;
