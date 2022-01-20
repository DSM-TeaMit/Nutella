import { createContext } from "react";

export interface ModalContentType {
  modals: JSX.Element[];
  closeCurrentModal: () => void;
  closeByStep: (step: number) => void;
  openModal: (modal: JSX.Element) => void;
}

export const ModalContext = createContext<ModalContentType>({
  modals: [],
  closeCurrentModal: () => {},
  closeByStep: () => {},
  openModal: () => {},
});
