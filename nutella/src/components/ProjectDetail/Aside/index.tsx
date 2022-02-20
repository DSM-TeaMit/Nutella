import useModalContext from "../../../hooks/useModalContext";
import ProjectMemberModifyModal from "../../Modals/ProjectMemberModify";
import * as S from "./styles";

const Aside = () => {
  const { openModal } = useModalContext();

  return (
    <>
      <S.AsideContainer>
        <S.AsideTop>
          <S.Title>
            멤버 <span>3</span>
          </S.Title>
          <S.SubTitle
            onClick={(e) => {
              e.stopPropagation();
              openModal(<ProjectMemberModifyModal />);
            }}
          >
            수정
          </S.SubTitle>
        </S.AsideTop>
        <S.AsideContent>
          <S.RoleBox>
            <S.RoleTitle>프론트 엔드</S.RoleTitle>
            <S.User>
              <img src=""></img>
              <span>2105 김진근</span>
            </S.User>
            <S.User>
              <img src=""></img>
              <span>2107 김해교</span>
            </S.User>
          </S.RoleBox>
          <S.RoleBox>
            <S.RoleTitle>백 엔드</S.RoleTitle>
            <S.User>
              <img src=""></img>
              <span>2405 박준형</span>
            </S.User>
          </S.RoleBox>
          <S.RoleBox>
            <S.RoleTitle>디자인</S.RoleTitle>
            <S.User>
              <img src=""></img>
              <span>2105 김진근</span>
            </S.User>
          </S.RoleBox>
        </S.AsideContent>
      </S.AsideContainer>
    </>
  );
};

export default Aside;
