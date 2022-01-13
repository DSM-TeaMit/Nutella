import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <span>
          <S.NoDecoLink
            href="https://github.com/DSM-TeaMit/Nutella"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </S.NoDecoLink>
        </span>
        <span>
          <S.NoDecoLink
            href="https://github.com/DSM-TeaMit/Nutella"
            target="_blank"
            rel="noreferrer"
          >
            이용약관
          </S.NoDecoLink>
        </span>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Footer;
