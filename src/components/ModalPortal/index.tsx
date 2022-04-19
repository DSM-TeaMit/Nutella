import {
  forwardRef,
  Fragment,
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

export interface ModalPoralRef {
  show: () => void;
}

const ModalPortal = forwardRef<ModalPoralRef, PropsType>(
  ({ children }, ref) => {
    const id = useMemo(() => uniqueId(), []);
    const { modals, openModal, closeCurrentModal, currentModal } =
      useModalContext();
    const modalRef = useRef<HTMLDivElement>(null);
    const el = useMemo(() => document.getElementById("modal")!, []);

    const showModal = useCallback(() => {
      openModal(id);
    }, [id, openModal]);

    useImperativeHandle(ref, () => ({ show: showModal }));

    useEffect(() => {
      if (modals.length > 0) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [modals]);

    if (currentModal === id) {
      return ReactDOM.createPortal(
        <S.Background onClick={() => closeCurrentModal()}>
          <S.Container
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            ref={modalRef}
          >
            {children}
          </S.Container>
        </S.Background>,
        el
      );
    }

    return <Fragment />;
  }
);

ModalPortal.displayName = "ModalPortal";

export default ModalPortal;
