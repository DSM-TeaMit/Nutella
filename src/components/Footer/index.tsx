import * as S from "./styles";
import { ArrowBlackIcons, GithubIcons } from "../../assets/icons";
import { memo } from "react";

const Footer = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <div>
          <S.Flex>
            <S.NoDecoLink href="https://github.com/DSM-TeaMit/Nutella" target="_blank" rel="noreferrer">
              <S.Github alt="github" src={GithubIcons} />
              Github
              <S.Arrow alt="arrow" src={ArrowBlackIcons} />
            </S.NoDecoLink>
          </S.Flex>
        </div>
        <div>
          <S.Flex>
            <S.NoDecoLink href="https://github.com/DSM-TeaMit/Nutella" target="_blank" rel="noreferrer">
              이용약관
              <S.Arrow alt="arrow" src={ArrowBlackIcons} />
            </S.NoDecoLink>
          </S.Flex>
        </div>
        <S.CopyRight>2021 Team Teamit | Copyright ⓒ Teamit Corp. All Rights Reserved.</S.CopyRight>
      </S.ContentContainer>
    </S.Container>
  );
};

export default memo(Footer);
