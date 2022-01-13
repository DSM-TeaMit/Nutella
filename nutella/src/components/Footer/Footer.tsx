import * as S from "./styles";
import Arrow from "../../assets/icons/rightArrow.svg";

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
            <img alt="arrow" src={Arrow} />
          </S.NoDecoLink>
        </span>
        <span>
          <S.NoDecoLink
            href="https://github.com/DSM-TeaMit/Nutella"
            target="_blank"
            rel="noreferrer"
          >
            이용약관
            <img alt="arrow" src={Arrow} />
          </S.NoDecoLink>
        </span>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Footer;
