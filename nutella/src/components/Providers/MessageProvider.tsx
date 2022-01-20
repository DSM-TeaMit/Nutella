import { FC, useCallback, useState } from "react";
import { MessageContext, MessageContextType, MessageType } from "../../context/MessageContext";

const MessageProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const showMessage = useCallback(
    (message: MessageType) => {
      setMessages([...messages, message]);
    },
    [messages]
  );

  const value: MessageContextType = { messages, showMessage };

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};

export default MessageProvider;
