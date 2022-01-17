import * as S from "./styles";
import Team from "../../assets/icons/team.svg";

const ProjectCard = () => {
  return (
    <S.Container to="">
      <S.Image alt="project image" src="" />
      <S.InfoContainer>
        <div>
          <S.TitleContaienr>
            <S.Title>Teamit</S.Title>
            <S.TypeIcon alt="type icon" src={Team} />
          </S.TitleContaienr>
          <S.Description>
            Teamit은 위원은 정당에 가입하거나 정치에 관여할 수 없다. 헌법헌법헌법헌법헌법
          </S.Description>
        </div>
        <S.BottonContainer>
          <S.UserContainer>
            <S.UserImageContainer>
              <S.UserImageOuter>
                <S.UserImage />
              </S.UserImageOuter>
              <S.UserImageOuter>
                <S.UserImage />
              </S.UserImageOuter>
              <S.UserImageOuter>
                <S.UserImage />
              </S.UserImageOuter>
            </S.UserImageContainer>
            <S.UserAdditional>+3</S.UserAdditional>
          </S.UserContainer>
          <div>
            <S.Type>웹 · 보안&nbsp;</S.Type>
            <S.TypeAdditional>+3</S.TypeAdditional>
          </div>
        </S.BottonContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ProjectCard;
