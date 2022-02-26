import { ContentInner } from "../../styles";
import * as S from "./styles";
import { ArrowBlackIcons } from "../../../../assets/icons";
import { useMyProfile } from "../../../../queries/User";

const Setting = () => {
  const { data, isError, isLoading } = useMyProfile(
    "e973c27b-3e0e-4863-86be-b2e0dfd24908"
  );

  if (isError || isLoading) {
    return <></>;
  }

  const { githubId } = data!.data;

  return (
    <ContentInner>
      <S.SettingContaienr>
        <div>
          <S.Title>계정 설정</S.Title>
          <S.ContentContainer>
            <S.SettingTitle>Github</S.SettingTitle>
            <S.Gray>
              <span>{githubId || "입력하지 않음"}</span>
              <img alt="github arrow" src={ArrowBlackIcons} />
            </S.Gray>
          </S.ContentContainer>
        </div>
        <div>
          <S.Subtitle>위험</S.Subtitle>
          <S.ContentContainer>
            <S.SettingTitleRed>계정 삭제</S.SettingTitleRed>
            <S.Red>
              <span>삭제</span>
              <img alt="github arrow" src={ArrowBlackIcons} />
            </S.Red>
          </S.ContentContainer>
        </div>
      </S.SettingContaienr>
    </ContentInner>
  );
};

export default Setting;
