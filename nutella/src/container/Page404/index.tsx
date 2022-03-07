import { useEffect } from "react";
import Twemoji from "react-twemoji";
import * as S from "./styles";
import toast from "react-hot-toast";

const Page404 = () => {
  useEffect(() => {
    toast.error("페이지를 찾을 수 없습니다.");
  }, []);

  return (
    <S.Container>
      <main>
        <S.Big>404</S.Big>
        <Twemoji
          options={{
            folder: "svg",
            ext: ".svg",
          }}
        >
          <S.Title>페이지를 찾을 수 없습니다 😢</S.Title>
        </Twemoji>
        <S.A to="/feed">피드로 돌아가기</S.A>
      </main>
    </S.Container>
  );
};

export default Page404;
