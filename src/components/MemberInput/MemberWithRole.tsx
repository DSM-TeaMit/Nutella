import { FC, useState } from "react";
import { SearchedUser } from "../../utils/api/User";
import { UserWithRole } from "../Modals/ProejctAdd";
import TagInput, { Tag } from "../TagInput";
import * as S from "./styles";

interface PropsType {
  onRemoveClick: () => void;
  setTag: (tags: Tag[]) => void;
}

const MemberWithRole: FC<SearchedUser & UserWithRole & PropsType> = ({
  name,
  studentNo,
  thumbnailUrl,
  onRemoveClick,
  setTag,
  tags,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <S.SelectedMember>
      <S.ProfileImage src={thumbnailUrl} />
      <S.Name>
        {studentNo} {name}
      </S.Name>
      <S.Tags>
        <TagInput
          placeholder="역할 입력..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          clearValue={() => setValue("")}
          tagState={[tags, setTag]}
        />
      </S.Tags>
      <S.Remove onClick={onRemoveClick}>삭제</S.Remove>
    </S.SelectedMember>
  );
};

export default MemberWithRole;
