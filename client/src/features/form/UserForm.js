import { useFormContext } from "contexts/FormContext";
import FormMover from "./FormMover";
import FormMoverControl from "./FormMoverControl";
import FormCreateEvent from "./FormCreateEvent";
import FormScheduleEvent from "./FormScheduleEvent";
import FormConfirm from "./FormConfirm";
import FormSuccess from "./FormSuccess";

// This is the code for the form where you add events to the calendar
const UserForm = () => {
  
  // Specifically extract the currentStep and totalSteps from userFormContext
  const { currentStep, totalSteps } = useFormContext();

  // Called to display different parts of the form based on the latest step.
  const displayStep = step => {
    switch (step) {
      case 1:
        // Fields: Title, Description, Start Date, Final Date, Discord Username
        return <FormCreateEvent />;
      case 2:
        // Fields: Location, Start Time, End Time, FormRecurringDates values: (Recurrence Rate, Days of Week to repeat)
        return <FormScheduleEvent />;
      case 3:
        // Shows all of the form's data for the user to confirm
        return <FormConfirm />;
      case 4:
        // Displays a "Success!" message when completed.
        return <FormSuccess />;
      default:
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <FormMover />

        <div className="my-10 p-10 ">
            {displayStep(currentStep)}
        </div>
      </div>
      <div>
        {/* if currentStep isn't the last step (in the case of a bug/edge case), FormMoverControl won't render */}
        {/* This makes sure that the steps don't keep counting in the mover control */}
        {currentStep !== totalSteps.length && (
          <FormMoverControl />
        )}
      </div>
    </div>
  );
};

export default UserForm;