import * as S from "./styles";
import ReactDOM from "react-dom";
import useModalContext from "../../hooks/useModalContext";
import { useCallback, useEffect, useRef } from "react";

const ModalController = () => {
  const { modals, closeCurrentModal } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  const el = document.getElementById("modal")!;

  const onOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!modalRef.current) return;

      if (!modalRef.current.contains(e.target as Node)) {
        closeCurrentModal();
      }
    },
    [closeCurrentModal]
  );

  useEffect(() => {
    if (modals.length > 0) {
      window.addEventListener("click", onOutsideClick);
    } else {
      window.removeEventListener("click", onOutsideClick);
    }
  }, [modals, onOutsideClick]);

  return modals.length > 0 ? (
    ReactDOM.createPortal(
      <S.Background>
        <div ref={modalRef}>{modals[modals.length - 1]}</div>
      </S.Background>,
      el
    )
  ) : (
    <></>
  );
};

export default ModalController;
