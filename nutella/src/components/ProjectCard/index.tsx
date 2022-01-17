import * as S from "./styles";

const ProjectCard = () => {
  return (
    <S.Container to="">
      <S.Image alt="project image" src="" />
      <S.InfoContainer>
        <div>
          <S.TitleContaienr>
            <S.Title>Teamit</S.Title>
            <S.TypeIcon />
          </S.TitleContaienr>
          <S.Description>
            Teamit은 위원은 정당에 가입하거나 정치에 관여할 수 없다. 헌법헌법헌법헌법헌법
          </S.Description>
        </div>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ProjectCard;
