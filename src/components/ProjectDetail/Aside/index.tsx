import { FC, Fragment } from "react";
import useModalRef from "../../../hooks/useModalRef";
import { Members } from "../../../utils/api/ProjectDetails";
import ModalPortal from "../../ModalPortal";
import ProjectMemberModifyModal from "../../Modals/ProjectMemberModify";
import * as S from "./styles";

interface PropsType {
  data: Members[] | undefined;
}

const Aside: FC<PropsType> = ({ data }) => {
  const modalRef = useModalRef();

  return (
    <Fragment>
      <S.AsideContainer>
        <S.AsideTop>
          <S.Title>
            멤버 <span>{data?.length}</span>
          </S.Title>
          <S.SubTitle
            onClick={(e) => {
              e.stopPropagation();
              modalRef.current?.show();
            }}
          >
            수정
          </S.SubTitle>
        </S.AsideTop>
        <S.AsideContent>
          {data?.map((item) => {
            return (
              <>
                <S.RoleBox>
                  <S.RoleTitle>{item.role}</S.RoleTitle>
                  <S.User to={`/user/${item.uuid}`}>
                    <img src={item.thumbnailUrl}></img>
                    <span>
                      {item.studentNo} {item.name}
                    </span>
                  </S.User>
                </S.RoleBox>
              </>
            );
          })}
        </S.AsideContent>
      </S.AsideContainer>
      <ModalPortal ref={modalRef}>
        <ProjectMemberModifyModal />
      </ModalPortal>
    </Fragment>
  );
};

export default Aside;
