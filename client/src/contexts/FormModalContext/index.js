import React, { createContext, useContext } from "react";
import useProvideFormModal from "./useProvideFormModal";

// Creating a named context
const FormModalContext = createContext();

// Hook for consuming Authentication or User related data
export const useFormModalContext = () => {
  return useContext(FormModalContext);
};

// Creating a provider to wrap components that needs to acess Auth/User's data
// Note: a provider is a special component that pass the context to its children to access
const FormModalProvider = ({ children }) => {
  const formModal = useProvideFormModal();
  return <FormModalContext.Provider value={formModal}>{children}</FormModalContext.Provider>;
};

export default FormModalProvider;