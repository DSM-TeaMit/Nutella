import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import uniqueId from "../../constant/UniqueId";
import useModalContext from "../../hooks/useModalContext";
import * as S from "./styles";

interface PropsType {
  children: React.ReactNode;
}

interface RefType {
  show: () => void;
}

const ModalPortal = forwardRef<RefType, PropsType>(({ children }, ref) => {
  const id = useMemo(() => uniqueId(), []);
  const { modals, openModal, closeCurrentModal } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);
  const el = useMemo(() => document.getElementById("modal")!, []);

  const showModal = useCallback(() => {
    openModal(id);
  }, [id]);

  useImperativeHandle(ref, () => ({ show: showModal }));

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

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modals]);

  if (modals.length > 0) {
    const currentModal = modals.reverse()[0];

    if (currentModal === id) {
      return ReactDOM.createPortal(
        <S.Background>
          <div ref={modalRef}>{children}</div>
        </S.Background>,
        el,
        id
      );
    }
  }

  return <></>;
});

export default ModalPortal;
