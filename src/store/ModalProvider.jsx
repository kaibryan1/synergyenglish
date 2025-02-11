import { createContext, useState } from "react";
import Modal from "../components/modal/Modal";

export const ModalContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  modalComponent: null,
  setModalComponent: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  const openModal = (Component, props = {}, navTitle = "") => {
    setModalComponent({
      Component: Component,
      props,
      navTitle,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ctxValue = {
    isOpen,
    setIsOpen,
    modalComponent,
    setModalComponent,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={ctxValue}>
      {children}
      {modalComponent && (
        <Modal isOpen={!!modalComponent} onClose={closeModal}>
          <modalComponent.Component {...modalComponent.props} />
        </Modal>
      )}
    </ModalContext.Provider>
  );
}
