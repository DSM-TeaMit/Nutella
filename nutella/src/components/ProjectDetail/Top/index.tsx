import * as S from "./styles";
import { ProfileIcons, ViewIcons } from "../../../assets/icons";
import useModalContext from "../../../hooks/useModalContext";
import ProjectModifyModal from "../../Modals/ProjectInfoModify";

const Top = () => {
  const Field = ["웹", "보안", "임베디드", "대마고"];
  const { openModal } = useModalContext();

  return (
    <>
      <S.TopContainer>
        <S.TopContent>
          <S.ProjectImg alt="" src="" />
          <div>
            <S.ProjectTop>
              <S.ProjectName>Teamit</S.ProjectName>
              <S.ProjectRincian>
                <div>
                  <img src={ViewIcons} />
                  <S.Font>123</S.Font>
                  <img src={ProfileIcons} />
                  <S.Font>팀 프로젝트</S.Font>
                </div>
                <S.Modify
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(<ProjectModifyModal />);
                  }}
                >
                  수정
                </S.Modify>
              </S.ProjectRincian>
            </S.ProjectTop>
            <S.ProjectContent>
              사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든 국민은 주거의
              자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는
              검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.
            </S.ProjectContent>
            <S.ProjectBottom>
              <div>
                {Field.map((data, index) => {
                  return <S.Field key={index}>{data}</S.Field>;
                })}
              </div>
              <S.Step>계획중...</S.Step>
            </S.ProjectBottom>
          </div>
        </S.TopContent>
      </S.TopContainer>
    </>
  );
};

export default Top;
