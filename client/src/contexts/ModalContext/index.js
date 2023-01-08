import React, { createContext, useContext } from "react";
import useProvideModal from "./useProvideModal";

// Creating a named context
const ModalContext = createContext();

// Hook for consuming Authentication or User related data
export const useModalContext = () => {
  return useContext(ModalContext);
};

// Creating a provider to wrap components that needs to acess Auth/User's data
// Note: a provider is a special component that pass the context to its children to access
const ModalProvider = ({ children }) => {
  const auth = useProvideModal();
  return <ModalContext.Provider value={auth}>{children}</ModalContext.Provider>;
};

export default ModalProvider;