import { FC, useEffect, useRef } from "react";
import { MessageType } from "../../context/MessageContext";
import useMessageContext from "../../hooks/useMessageContext";
import * as S from "./styles";

const PositiveMessage: FC<MessageType> = ({ title, content, id }) => {
  const { removeMessage } = useMessageContext();
  const timeoutRef = useRef<NodeJS.Timeout>(setTimeout(() => removeMessage(id), 3000));

  return (
    <S.PositiveContainer
      onClick={() => {
        clearTimeout(timeoutRef.current);
        removeMessage(id);
      }}
    >
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.PositiveContainer>
  );
};

export default PositiveMessage;
