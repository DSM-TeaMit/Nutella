import { FC } from "react";
import * as I from "./styles";

interface PropsType {
  message: string;
}

const Error: FC<PropsType> = ({ message }) => {
  return (
    <I.ContentInner>
      <I.FlexContainer>
        <div>
          <I.Message>:(</I.Message>
          <I.Message>{message}</I.Message>
        </div>
      </I.FlexContainer>
    </I.ContentInner>
  );
};

export default Error;
