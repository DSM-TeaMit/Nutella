import { FC, useEffect, useRef } from "react";
import { MessageType } from "../../context/MessageContext";
import useMessageContext from "../../hooks/useMessageContext";
import * as S from "./styles";

const DenialMessage: FC<MessageType> = ({ title, content, id }) => {
  const { removeMessage } = useMessageContext();
  const popMessageRef = useRef(() => removeMessage(id));

  const onClick = () => {
    removeMessage(id);
  };

  useEffect(() => {
    popMessageRef.current = () => removeMessage(id);
  }, [id, removeMessage]);

  useEffect(() => {
    const timer = setTimeout(() => popMessageRef.current(), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.DenialContainer onClick={onClick}>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.DenialContainer>
  );
};

export default DenialMessage;
