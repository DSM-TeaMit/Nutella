import * as S from "./styles";
import ReactDOM from "react-dom";
import useModalContext from "../../hooks/useModalContext";

const ModalController = () => {
  const { modals, closeCurrentModal } = useModalContext();

  const el = document.getElementById("modal")!;

  const onOutsideClick = () => {
    closeCurrentModal();
  };

  return modals.length > 0 ? (
    ReactDOM.createPortal(
      <S.Background onClick={onOutsideClick}>{modals[modals.length - 1]}</S.Background>,
      el
    )
  ) : (
    <></>
  );
};

export default ModalController;
