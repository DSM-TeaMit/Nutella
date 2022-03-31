import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import Twemoji from "react-twemoji";
import * as I from "./styles";

interface PropsType {
  message: string;
  to: string;
}

const NotFound: FC<PropsType> = ({ message, to }) => {
  useEffect(() => {
    toast.error("페이지를 찾을 수 없습니다.");
  }, []);

  return (
    <I.NotFoundContainer>
      <main>
        <I.Big>404</I.Big>
        <Twemoji
          options={{
            folder: "svg",
            ext: ".svg",
          }}
        >
          <I.Title>페이지를 찾을 수 없습니다 😢</I.Title>
        </Twemoji>
        <I.A to={to}>{message}</I.A>
      </main>
    </I.NotFoundContainer>
  );
};

export default NotFound;
