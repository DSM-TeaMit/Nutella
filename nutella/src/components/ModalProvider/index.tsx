import { FC, useCallback, useMemo, useState } from "react";
import { ModalContentType, ModalContext } from "../../context/ModalContext";

const ModalProvider: FC = ({ children }) => {
  const [modals, setModals] = useState<JSX.Element[]>([]);

  const closeCurrentModal = useCallback(() => {
    if (modals.length <= 0) {
      return;
    }

    const copyModals = [...modals];
    copyModals.pop();

    setModals(copyModals);
  }, [modals]);

  const closeByStep = useCallback((step: number) => {
    if (step <= 0 || !Number.isInteger(step)) {
      throw new Error(
        "ModalContext의 closeByStep의 매개변수로 오는 step은 양의 정수이여야 합니다."
      );
    }

    const fixedStep = step > modals.length ? modals.length : step;
    const copyModals = [...modals];

    new Array(fixedStep).fill(0).forEach(() => {
      copyModals.pop();
    });

    setModals(copyModals);
  }, []);

  const openModal = useCallback(
    (modal: JSX.Element) => {
      setModals([...modals, modal]);
    },
    [modals]
  );

  const value = useMemo<ModalContentType>(
    () => ({ modals, closeCurrentModal, openModal, closeByStep }),
    [closeByStep, closeCurrentModal, modals, openModal]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
