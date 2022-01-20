import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const useMessageContext = () => useContext(MessageContext);

export default useMessageContext;
