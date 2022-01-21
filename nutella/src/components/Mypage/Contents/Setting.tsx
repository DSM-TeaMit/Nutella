import { ContentInner } from "../styles";
import * as S from "./styles";
import { ArrowBlack } from "../../../assets/icons";

const Setting = () => {
  return (
    <ContentInner>
      <S.SettingContaienr>
        <div>
          <S.Title>계정 설정</S.Title>
          <S.ContentContainer>
            <S.SettingTitle>Github</S.SettingTitle>
            <S.Gray>
              <span>KJG04</span>
              <img alt="github arrow" src={ArrowBlack} />
            </S.Gray>
          </S.ContentContainer>
        </div>
        <div>
          <S.Subtitle>위험</S.Subtitle>
          <S.ContentContainer>
            <S.SettingTitleRed>계정 삭제</S.SettingTitleRed>
            <S.Red>
              <span>삭제</span>
              <img alt="github arrow" src={ArrowBlack} />
            </S.Red>
          </S.ContentContainer>
        </div>
      </S.SettingContaienr>
    </ContentInner>
  );
};

export default Setting;
