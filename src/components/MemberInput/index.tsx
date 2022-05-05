import React, { FC, Fragment, useCallback, useState } from "react";
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
  const [isSearched, setIsSearched] = useState<boolean>(false);

  const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsSearched(false);
  }, []);

  const onKeyDown = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setIsSearched(true);
        await mutation.mutateAsync(name);
      }
    },
    [mutation, name]
  );

  return (
    <S.Container>
      <S.InputStyle
        placeholder="이름으로 유저 검색..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsFocus(false);
            setIsSearched(false);
          }, 500);
        }}
        value={name}
        onChange={onNameChange}
        onKeyDown={onKeyDown}
      />
      <S.Line />
      {isFocus && (
        <S.UserContainer>
          <S.Description>
            검색된 유저 <S.Enter>(Enter로 검색)</S.Enter>
          </S.Description>
          <S.UserInner>
            {isSearched && (
              <Fragment>
                {mutation.isLoading && <S.Message>검색 중...</S.Message>}
                {mutation.isError && <S.Message>검색 중 오류 발생</S.Message>}
                {mutation.data && mutation.data?.data.students.length <= 0 && <S.Message>검색 결과 없음</S.Message>}
                {mutation.data?.data.students.map((value) => (
                  <S.MemberButton
                    key={value.uuid}
                    onClick={(e) => {
                      e.stopPropagation();
                      setName("");
                      onUserClick(value);
                    }}
                  >
                    <Member {...value} />
                  </S.MemberButton>
                ))}
              </Fragment>
            )}
          </S.UserInner>
        </S.UserContainer>
      )}
    </S.Container>
  );
};

export default MemberInput;
