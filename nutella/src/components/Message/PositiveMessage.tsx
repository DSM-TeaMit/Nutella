import { FC } from "react";
import { MessageType } from "../../context/MessageContext";
import useMessageContext from "../../hooks/useMessageContext";
import * as S from "./styles";

const PositiveMessage: FC<MessageType> = ({ title, content, id }) => {
  const { removeMessage } = useMessageContext();

  return (
    <S.PositiveContainer onClick={() => removeMessage(id)}>
      <S.Title>
        {title}
      </S.Title>
      <S.Content>{content}</S.Content>
    </S.PositiveContainer>
  );
};

export default PositiveMessage;
