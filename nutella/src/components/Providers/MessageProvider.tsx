import { FC, useCallback, useMemo, useState } from "react";
import { MessageContext, MessageContextType, MessageType } from "../../context/MessageContext";

const MessageProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const showMessage = useCallback(
    (message: Omit<MessageType, "id">) => {
      setMessages(
        [...messages, { ...message, id: new Date().getTime() }].reverse().slice(0, 6).reverse()
      );
    },
    [messages]
  );

  const removeMessage = useCallback(
    (id: number) => {
      setMessages(messages.filter((value) => value.id !== id));
    },
    [messages]
  );

  const value = useMemo<MessageContextType>(
    () => ({
      messages,
      showMessage,
      removeMessage,
    }),
    [messages, removeMessage, showMessage]
  );

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};

export default MessageProvider;
