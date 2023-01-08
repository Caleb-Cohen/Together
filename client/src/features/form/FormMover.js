import React, { useEffect, useState } from "react";
import { useFormContext } from "contexts/FormContext";

// newStep (state) initial data example (fig: 1):
// {
//   "description": "Description",
//   "completed": true,
//   "highlighted": false,
//   "selected": true
// }

const stepStatus = {
  "current": {
    highlighted: true,
    selected: true,
    completed: true,
  },
  "pending": {
    highlighted: false,
    selected: false,
    completed: false,
  },
  "completed": {
    highlighted: false,
    selected: true,
    completed: true,
  }
}

const FormMover = () => {
  const { currentStep, totalSteps } = useFormContext();
  // Creating new steps with array with initial object data (Check above fig: 1)
  const [newStep, setNewStep] = useState(
    totalSteps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selected: index === 0 ? true : false
    }))
  );

  // When currentStep changes, update newStep array objects
  useEffect(() => {
    const updateStepStatus = () => {
      const stepNumber = currentStep - 1;
      // Update newStep object's status
      setNewStep((prevNewStep) =>
        prevNewStep.map((stepObject, count) => {
            // Current step
            if (count === stepNumber) {
              // Update stepObject with current status
              return {
                ...stepObject,
                ...stepStatus.current
              };
            }

            // Completed steps
            if (count < stepNumber) {
              // Update stepObject with completed status
              return {
                ...stepObject,
                ...stepStatus.completed
              };
            }

            // Pending steps
            // Update stepObject with pending status
            return {
              ...stepObject,
              ...stepStatus.pending
            };
          })
      );
    }

    updateStepStatus();
  }, [currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-grey-300 h-12 w-12 flex items-center justify-center py-3 ${
              step.selected
                ? "bg-teal-600 text-white font-bold border-teal-600"
                : ""
            }`}
          >
            {/* display numbers */}
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {/* display description */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-teal-600" : "border-gray-300"
          }`}
        >
          {/* display line */}
        </div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default FormMover;