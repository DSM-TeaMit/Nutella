import * as S from "./styles";
import Arrow from "../../assets/icons/rightArrow.svg";
import GithubIcon from "../../assets/icons/github.svg";

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
            <S.Github alt="github" src={GithubIcon} />
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
        <S.CopyRight>2021 Team Teamit | Copyright ⓒ Teamit Corp. All Rights Reserved.</S.CopyRight>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Footer;
