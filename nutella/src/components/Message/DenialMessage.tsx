import { FC, useRef } from "react";
import { MessageType } from "../../context/MessageContext";
import useMessageContext from "../../hooks/useMessageContext";
import * as S from "./styles";

const DenialMessage: FC<MessageType> = ({ title, content, id }) => {
  const { removeMessage } = useMessageContext();
  const timeoutRef = useRef<NodeJS.Timeout>(setTimeout(() => removeMessage(id), 3000));

  return (
    <S.DenialContainer
      onClick={() => {
        clearTimeout(timeoutRef.current);
        removeMessage(id);
      }}
    >
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.DenialContainer>
  );
};

export default DenialMessage;
