import TestModal from "../TestModal";
import * as S from "./styles";
import ReactDOM from "react-dom";

const ModalController = () => {
  const el = document.getElementById("modal")!;

  return ReactDOM.createPortal(
    <S.Background>
      <TestModal />
    </S.Background>,
    el
  );
};

export default ModalController;
