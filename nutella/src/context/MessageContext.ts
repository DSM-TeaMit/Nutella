import { createContext } from "react";

export interface MessageType {
  id: number;
  title: string;
  content: string;
  type: "Positive" | "Denial";
}

export interface MessageContextType {
  messages: MessageType[];
  showMessage: (message: MessageType) => void;
}

export const MessageContext = createContext<MessageContextType>({
  messages: [],
  showMessage: () => {},
});
