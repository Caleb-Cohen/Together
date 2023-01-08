import { useState } from "react";

// Everything related to the modal context will be inside of here: (CRUD)
// Allow us to check and modify any methods/functions in one place.
const useProvideModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
    activeModal,
    setActiveModal
  }
};

export default useProvideModal;