import styles from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";

import { useLenis } from "../../utils/LenisProvider";

// React
import { useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import { ModalContext } from "../../store/ModalProvider";

import useWindowSize from "../../utils/useWindowResize";

export default function Modal() {
  const { isOpen, modalComponent, closeModal } = useContext(ModalContext);
  const lenis = useLenis();

  // Stop the scroll
  useEffect(() => {
    isOpen && lenis.stop();
    document.body.style.setProperty(
      "overflowY",
      isOpen ? "hidden" : "auto",
      "important"
    );
    document.documentElement.style.setProperty(
      "overflowY",
      isOpen ? "hidden" : "auto",
      "important"
    );

    return () => {
      lenis.start();
      document.body.style.removeProperty("overflowY");
      document.documentElement.style.removeProperty("overflowY");
    };
  }, [isOpen]);

  const { width } = useWindowSize();
  const isMobile = width <= 900;
  // Close the modal when clicking outside the modal content
  const handleClickOutside = (e) => {
    e.stopPropagation(); // Prevent modal content from closing
    closeModal();
  };

  //   Dynamic Animation
  const modalInitialPosition = isMobile ? { y: "100%" } : { x: "100%" };
  const modalAnimate = isMobile ? { y: "0%" } : { x: "0%" };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          }}
          animate={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(2px)",
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          exit={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className={styles.modalWrapper}
          onClick={handleClickOutside} // Close when clicking outside modal
        >
          <div className={styles.contentWrapper}>
            <motion.div
              initial={modalInitialPosition}
              animate={modalAnimate}
              exit={modalInitialPosition}
              transition={{ duration: 0.25, ease: "easeIn" }}
              className={styles.content}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {modalComponent && (
                <modalComponent.Component {...modalComponent.props} />
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
}
