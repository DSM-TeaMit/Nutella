import { FC, useCallback, useMemo, useState } from "react";
import { ModalContextType, ModalContext } from "../../context/ModalContext";

const ModalProvider: FC = ({ children }) => {
  const [modals, setModals] = useState<string[]>([]);

  const closeCurrentModal = useCallback(() => {
    if (modals.length <= 0) {
      return;
    }

    const copyModals = [...modals];
    copyModals.pop();

    setModals(copyModals);
  }, [modals]);

  const closeByStep = useCallback(
    (step: number) => {
      if (step <= 0 || !Number.isInteger(step)) {
        throw new Error("ModalContext의 closeByStep의 매개변수로 오는 step은 양의 정수이여야 합니다.");
      }

      const fixedStep = step > modals.length ? modals.length : step;
      const copyModals = [...modals];

      new Array(fixedStep).fill(0).forEach(() => {
        copyModals.pop();
      });

      setModals(copyModals);
    },
    [modals]
  );

  const openModal = useCallback(
    (modal: string) => {
      setModals([...modals, modal]);
    },
    [modals]
  );

  const currentModal = useMemo(() => {
    if (modals.length <= 0) {
      return undefined;
    }

    return modals[modals.length - 1];
  }, [modals]);

  const closeAll = useCallback(() => {
    setModals([]);
  }, []);

  const value = useMemo<ModalContextType>(
    () => ({
      modals,
      closeCurrentModal,
      openModal,
      closeByStep,
      currentModal,
      closeAll,
    }),
    [closeAll, closeByStep, closeCurrentModal, currentModal, modals, openModal]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
