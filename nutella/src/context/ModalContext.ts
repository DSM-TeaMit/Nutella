import { createContext } from "react";

export interface ModalContextType {
  modals: JSX.Element[];
  closeCurrentModal: () => void;
  closeByStep: (step: number) => void;
  openModal: (modal: JSX.Element) => void;
}

export const ModalContext = createContext<ModalContextType>({
  modals: [],
  closeCurrentModal: () => {},
  closeByStep: () => {},
  openModal: () => {},
});
