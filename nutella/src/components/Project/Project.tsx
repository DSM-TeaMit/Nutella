import * as S from "./styles";
import ProjectPhotoImg from "../../assets/icons/projectPhoto.svg";
import ProfileImg from "../../assets/icons/profile.svg";
import ViewImg from "../../assets/icons/view.svg";

const Project = () => {
  return (
    <S.Content>
      <S.ProjectPhoto src={ProjectPhotoImg} />
      <S.ProjectBottom>
        <S.ProjectInfoBox>
          <S.ProjectInfo>
            <S.ProjectTitle>Teamit</S.ProjectTitle>
            <img src={ProfileImg} />
          </S.ProjectInfo>
          <S.ProjectInfo>
            <S.Field>웹</S.Field>
            <div>
              <img src={ViewImg} />
              <S.Number>123</S.Number>
            </div>
          </S.ProjectInfo>
        </S.ProjectInfoBox>
      </S.ProjectBottom>
    </S.Content>
  );
};

export default Project;
