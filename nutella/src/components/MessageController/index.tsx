import ReactDOM from "react-dom";
import * as S from "./styles";

const MessageController = () => {
  const el = document.getElementById("message")!;

  return ReactDOM.createPortal(
    <S.Container>
      <S.MessageContainer></S.MessageContainer>
    </S.Container>,
    el
  );
};

export default MessageController;
