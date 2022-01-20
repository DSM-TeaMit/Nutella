import * as S from "./styles";
import ReactDOM from "react-dom";
import useModalContext from "../../hooks/useModalContext";

const ModalController = () => {
  const { modals } = useModalContext();

  const el = document.getElementById("modal")!;

  return modals.length > 0 ? (
    ReactDOM.createPortal(<S.Background>{modals[modals.length - 1]}</S.Background>, el)
  ) : (
    <></>
  );
};

export default ModalController;
