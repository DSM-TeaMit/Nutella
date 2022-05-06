import { FC, Fragment, useMemo } from "react";
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

  const renderMember = useMemo(() => {
    const roleSet = new Set<string>();

    if (!data) {
      return <></>;
    }

    data.forEach((value) => {
      const roles = value.role.split(",");

      roles.forEach((item) => roleSet.add(item));
    });

    return [...roleSet.values()].map((item) => (
      <S.RoleBox key={item}>
        <S.RoleTitle>{item}</S.RoleTitle>
        {data
          .filter((elem) => elem.role.split(",").includes(item))
          .map((elem) => (
            <S.User key={elem.uuid} to={`/user/${elem.uuid}`}>
              <img src={elem.thumbnailUrl}></img>
              <span>
                {elem.studentNo} {elem.name}
              </span>
            </S.User>
          ))}
      </S.RoleBox>
    ));
  }, [data]);

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
        <S.AsideContent>{renderMember}</S.AsideContent>
      </S.AsideContainer>
      <ModalPortal ref={modalRef}>
        <ProjectMemberModifyModal />
      </ModalPortal>
    </Fragment>
  );
};

export default Aside;
