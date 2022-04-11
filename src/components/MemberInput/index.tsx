import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useSeachUser } from "../../queries/User";
import { SearchedUser } from "../../utils/api/User";
import Member from "./Member";
import * as S from "./styles";

interface PropsType {
  onUserClick: (user: SearchedUser) => void;
}

const MemberInput: FC<PropsType> = ({ onUserClick }) => {
  const [isFocus, setIsFocus] = useState(false);
  const mutation = useSeachUser();
  const [name, setName] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const timeout = useCallback(async () => {
    await mutation.mutateAsync(name);
    timerRef.current = null;
  }, [mutation, name]);

  const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setTimeout(timeout, 1000);
  }, [timeout]);

  return (
    <S.Container>
      <S.InputStyle
        placeholder="이름으로 유저 검색..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={name}
        onChange={onNameChange}
      />
      <S.Line />
      {isFocus && (
        <S.UserContainer>
          <S.Description>검색된 유저</S.Description>
          <S.UserInner>
            {mutation.isLoading && <S.Message>검색 중...</S.Message>}
            {mutation.isError && <S.Message>검색 중 오류 발생</S.Message>}
            {mutation.data && mutation.data?.data.students.length <= 0 && (
              <S.Message>검색 결과 없음</S.Message>
            )}
            {mutation.data?.data.students.map((value) => (
              <div key={value.uuid} onClick={() => onUserClick(value)}>
                <Member {...value} />
              </div>
            ))}
          </S.UserInner>
        </S.UserContainer>
      )}
    </S.Container>
  );
};

export default MemberInput;
