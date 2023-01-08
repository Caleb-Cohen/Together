import { AnimatePresence } from "framer-motion";
import EventModal from "./EventModal";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { useModalContext } from "contexts/ModalContext";

const Modal = (props) => {
  const modal = useModalContext();

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  return (
    <div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modal.isOpen &&
          <Backdrop onClick={modal.handleClose}>
            <motion.div
              className="modal"
              onClick={e => e.stopPropagation()}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <EventModal handleClose={modal.handleClose} />
            </motion.div>
          </Backdrop>
        }
      </AnimatePresence>
    </div>
  );
};

export default Modal;
