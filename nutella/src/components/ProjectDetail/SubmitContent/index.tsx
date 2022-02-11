import * as S from "./styles";
import { PlusIcons } from "../../../assets/icons";

const SubmitContent = () => {
  return (
    <S.SubmitContentContainer>
      <S.SubmitContent>
        <S.ProjectFile>
          <S.SubTitle>Teamit 계획서</S.SubTitle>
          <S.SubmitBox>
            <S.PlusBox>
              <img src={PlusIcons} alt="plus" />
            </S.PlusBox>
            <S.Font>Teamit 계획서 작성하기</S.Font>
          </S.SubmitBox>
        </S.ProjectFile>
        <S.ProjectFile>
          <S.SubTitle>Teamit 결과 보고서</S.SubTitle>
          <S.SubmitBox>
            <S.PlusBox>
              <img src={PlusIcons} alt="plus" />
            </S.PlusBox>
            <S.Font>Teamit 결과 보고서 작성하기</S.Font>
          </S.SubmitBox>
        </S.ProjectFile>
      </S.SubmitContent>
      <S.ResultContent>
        <div>
          <S.SubTitle>프로젝트 결과</S.SubTitle>
          <S.Box>
            <S.ResFont>프로젝트를 완료하고 작성할 수 있습니다.</S.ResFont>
          </S.Box>
        </div>
      </S.ResultContent>
    </S.SubmitContentContainer>
  );
};

export default SubmitContent;
