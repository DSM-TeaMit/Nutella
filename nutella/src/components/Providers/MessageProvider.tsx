import { FC, useCallback, useMemo, useState } from "react";
import { MessageContext, MessageContextType, MessageType } from "../../context/MessageContext";

const MessageProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const showMessage = useCallback(
    (message: Omit<MessageType, "id">) => {
      setMessages([...messages, { ...message, id: new Date().getTime() }]);
    },
    [messages]
  );

  const value: MessageContextType = useMemo(
    () => ({
      messages,
      showMessage,
    }),
    [messages, showMessage]
  );

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};

export default MessageProvider;
