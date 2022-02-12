import * as S from "./styles";

const Comment = () => {
  return (
    <>
      <S.CommentContainer>
        <S.CommentCount>
          댓글 <span>3개</span>
        </S.CommentCount>
        <S.CommentBox>
          <S.Profile src="" alt="" />
          <S.CommentInput placeholder="2105 김진근 (으)로 댓글 달기" />
          <S.CommentBtn>댓글 달기</S.CommentBtn>
        </S.CommentBox>
        <S.CommentBox>
          <S.Profile src="" alt="" />
          <S.CommentView>
            <S.CommentName>2105 김진근</S.CommentName>
            <S.CommentConent>
              안녕하세요. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든
              국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을
              할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야
              한다.
            </S.CommentConent>
          </S.CommentView>
        </S.CommentBox>
        <S.CommentBox>
          <S.Profile src="" alt="" />
          <S.CommentView>
            <S.CommentName>2105 김진근</S.CommentName>
            <S.CommentConent>
              안녕하세요. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든
              국민은 주거의 자유를
            </S.CommentConent>
          </S.CommentView>
        </S.CommentBox>
        <S.CommentBox>
          <S.Profile src="" alt="" />
          <S.CommentView>
            <S.CommentName>2105 김진근</S.CommentName>
            <S.CommentConent>
              안녕하세요. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든
              국민은 주거의 자유를
            </S.CommentConent>
          </S.CommentView>
        </S.CommentBox>
      </S.CommentContainer>
    </>
  );
};

export default Comment;
