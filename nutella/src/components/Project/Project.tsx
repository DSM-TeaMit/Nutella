import * as S from "./styles";
import { ProfileIcons, ProjectPhotoIcons, ViewIcons } from "../../assets/icons";

const Project = () => {
  return (
    <S.Content>
      <S.ProjectPhoto src={ProjectPhotoIcons} />
      <S.ProjectBottom>
        <S.ProjectInfoBox>
          <S.ProjectInfo>
            <S.ProjectTitle>Teamit</S.ProjectTitle>
            <img src={ProfileIcons} />
          </S.ProjectInfo>
          <S.ProjectInfo>
            <S.Field>웹</S.Field>
            <div>
              <img src={ViewIcons} />
              <S.Number>123</S.Number>
            </div>
          </S.ProjectInfo>
        </S.ProjectInfoBox>
      </S.ProjectBottom>
    </S.Content>
  );
};

export default Project;
