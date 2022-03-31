import * as I from "./styles";

const Loading = () => {
  return (
    <I.ContentInner>
      <I.FlexContainer>
        <div>
          <I.Message>로딩중...</I.Message>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Loading;
