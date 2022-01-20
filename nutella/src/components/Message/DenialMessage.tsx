import { FC } from "react";
import { MessageType } from "../../context/MessageContext";
import useMessageContext from "../../hooks/useMessageContext";
import * as S from "./styles";

const DenialMessage: FC<MessageType> = ({ title, content, id }) => {
  const { removeMessage } = useMessageContext();

  return (
    <S.DenialContainer onClick={() => removeMessage(id)}>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.DenialContainer>
  );
};

export default DenialMessage;
