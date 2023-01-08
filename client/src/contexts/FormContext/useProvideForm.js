import { useState } from "react";
import { generateRecurringDatesArray } from "utilities/calendar";
import DataService from "services/dataService";

const useProvideForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = ["Description", "Schedule", "Confirm", "Success"];
  
  const [formData, setFormData] = useState({
    recurring: { rate: "noRecurr", days: [] },
    completed: false,
  });

  // form errors
  const [formCreateEventErrors, setFormCreateEventErrors] = useState([]);
  const [formScheduleEventErrors, setFormScheduleEventErrors] = useState([]);
  
  const handleNewStep = async direction => {
    // console.log(checkCompleted()) // Debug
    const newStep = direction === "next" ? currentStep + 1: currentStep - 1;

    if (newStep > 0 && newStep <= totalSteps.length) {
      setCurrentStep(newStep);
    }

    // if(newStep === 1){console.log(newStep)}

    // Submit form to server
    if (newStep === 4) {
      const recurringDates = generateRecurringDatesArray(formData);
      const data = JSON.stringify({
        ...formData,
        dates: recurringDates
      })
      await DataService.create({ data: data })
    }
  }

  return {
    currentStep,
    totalSteps,
    formData,
    formCreateEventErrors,
    formScheduleEventErrors,
    handleNewStep,
    setFormData,
    setFormCreateEventErrors,
    setFormScheduleEventErrors
  };
};

export default useProvideForm;