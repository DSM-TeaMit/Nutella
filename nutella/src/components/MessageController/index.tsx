import React, { FC, useMemo } from "react";
import ReactDOM from "react-dom";
import { MessageType } from "../../context/MessageContext";
import useMessageContext from "../../hooks/useMessageContext";
import DenialMessage from "../Message/DenialMessage";
import PositiveMessage from "../Message/PositiveMessage";
import * as S from "./styles";

const MessageController = () => {
  const { messages } = useMessageContext();

  const el = document.getElementById("message")!;

  const renderMessages = useMemo(
    () =>
      messages.map((value) => {
        const { type } = value;
        const componentMap = new Map<string, FC<MessageType>>()
          .set("Positive", PositiveMessage)
          .set("Denial", DenialMessage);

        const component = componentMap.get(type)!;

        return React.createElement(component, value);
      }),
    [messages]
  );

  return ReactDOM.createPortal(
    <S.Container>
      <S.MessageContainer></S.MessageContainer>
    </S.Container>,
    el
  );
};

export default MessageController;
