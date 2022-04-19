import { createContext } from "react";

export interface ModalContextType {
  modals: string[];
  closeCurrentModal: () => void;
  closeByStep: (step: number) => void;
  openModal: (modal: string) => void;
  currentModal: string | undefined;
}

export const ModalContext = createContext<ModalContextType>({
  modals: [],
  closeCurrentModal: () => {},
  closeByStep: () => {},
  openModal: () => {},
  currentModal: undefined,
});
