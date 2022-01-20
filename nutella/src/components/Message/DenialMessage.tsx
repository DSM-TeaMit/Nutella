import { FC } from "react";
import { MessageType } from "../../context/MessageContext";
import * as S from "./styles";

const DenialMessage: FC<MessageType> = ({ title, content }) => {
  return (
    <S.DenialContainer>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.DenialContainer>
  );
};

export default DenialMessage;
