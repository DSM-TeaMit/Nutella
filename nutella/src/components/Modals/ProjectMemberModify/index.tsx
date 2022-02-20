import * as S from "./styles";

const ProjectMemberModifyModal = () => {
  return (
    <S.ProjectMemberModifyModalContainer>
      <S.Title>멤버</S.Title>
      <S.ContentBox>
        <S.MemberBox>
          <S.MemberProfile>
            <S.User>
              <img src=""></img>
              <span>2105 김진근</span>
            </S.User>
            <span>삭제</span>
          </S.MemberProfile>
          <S.RollBox>
            <S.TagBox>
              <S.Tag>프론트 엔드</S.Tag>
              <S.Tag>디자인</S.Tag>
            </S.TagBox>
            <S.InputBox placeholder="역할 입력..." />
          </S.RollBox>
        </S.MemberBox>
        <S.UserAddInputBox placeholder="추가하고 싶은 유저 이름 입력..." />
        <S.MemberBox>
          <S.MemberProfile>
            <S.User>
              <img src=""></img>
              <span>2107 김해교</span>
            </S.User>
            <span>삭제</span>
          </S.MemberProfile>
          <S.RollBox>
            <S.TagBox>
              <S.Tag>프론트 엔드</S.Tag>
            </S.TagBox>
            <S.InputBox placeholder="역할 입력..." />
          </S.RollBox>
        </S.MemberBox>
        <S.MemberBox>
          <S.MemberProfile>
            <S.User>
              <img src=""></img>
              <span>2405 박준형</span>
            </S.User>
            <span>삭제</span>
          </S.MemberProfile>
          <S.RollBox>
            <S.TagBox>
              <S.Tag>백엔드</S.Tag>
            </S.TagBox>
            <S.InputBox placeholder="역할 입력..." />
          </S.RollBox>
        </S.MemberBox>
      </S.ContentBox>
    </S.ProjectMemberModifyModalContainer>
  );
};

export default ProjectMemberModifyModal;
