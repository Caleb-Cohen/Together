import React, { createContext, useContext } from 'react';
import useProvideForm from './useProvideForm';

// Creating a named context
const FormContext = createContext();

// Hook for consuming form related data
export const useFormContext = () => {
  return useContext(FormContext);
};

// Creating a provider to wrap components that needs to access form's data
// Note: a provider is a special component that pass the context to its children to access
const FormProvider = ({ children }) => {
  const formData = useProvideForm();
  return <FormContext.Provider value={formData}>{children}</FormContext.Provider>;
};

export default FormProvider;