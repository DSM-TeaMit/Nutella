import { createContext, FC, useCallback, useMemo, useState } from "react";

export interface ModalContentType {
  modals: JSX.Element[];
  closeCurrentModal: () => void;
  openModal: (modal: JSX.Element) => void;
}

export const ModalContext = createContext<ModalContentType>({
  modals: [],
  closeCurrentModal: () => {},
  openModal: () => {},
});

export const ModalProvider: FC = ({ children }) => {
  const [modals, setModals] = useState<JSX.Element[]>([]);

  const closeCurrentModal = useCallback(() => {
    const copyModals = [...modals];
    copyModals.pop();

    if (copyModals.length > 0) {
      setModals(copyModals);
    }
  }, [modals]);

  const openModal = useCallback(
    (modal: JSX.Element) => {
      setModals([...modals, modal]);
    },
    [modals]
  );

  const value = useMemo<ModalContentType>(
    () => ({ modals, closeCurrentModal, openModal }),
    [closeCurrentModal, modals, openModal]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};