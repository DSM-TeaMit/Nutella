import { useRef } from "react";
import { ModalPoralRef } from "../components/ModalPortal";

const useModalRef = () => useRef<ModalPoralRef>(null);

export default useModalRef;
