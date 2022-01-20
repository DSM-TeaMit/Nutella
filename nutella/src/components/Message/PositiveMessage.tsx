import { FC } from "react";
import { MessageType } from "../../context/MessageContext";
import * as S from "./styles";

const PositiveMessage: FC<MessageType> = ({ title, content }) => {
  return (
    <S.PositiveContainer>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.PositiveContainer>
  );
};

export default PositiveMessage;
