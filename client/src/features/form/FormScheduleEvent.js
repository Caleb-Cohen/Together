import React, { useState, useEffect } from "react";
import { useFormContext } from "contexts/FormContext";
import FormRecurringDates from "./FormRecurringDates";
import { format } from "date-fns";

// This component contains location, and the start and end time, see the FormRecurringDates sub-component for details regarding the recurring events
export default function FormScheduleEvent() {
  const { formData, setFormData, formScheduleEventErrors } = useFormContext();
  const [finalDateHidden, setFinalDateHidden] = useState("");
  const [firstDateTitle, setFirstDateTitle] = useState("Date");

  // This handles how the "days of the week" checkboxes should be hidden when the event is non-recurring
  useEffect(() => {
    // If Not Recurring, set finalDate to be invisible
    if (formData.recurring.rate === "noRecurr") {
      setFinalDateHidden("hidden");
      // Set title of first date to just be date
      setFirstDateTitle("Date");
    } else {
      setFinalDateHidden("");
      setFirstDateTitle("Start Date");
    }
  }, [formData.recurring.rate])

  useEffect(() => {
    console.log("Got errors for formScheduleEvent:", formScheduleEventErrors);
  }, [formScheduleEventErrors]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // Debug, remove later
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div>


      {formScheduleEventErrors.map((error, index) => {
        return <div class="alert alert-error shadow-lg text-red-700" key="index">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span>
          </div>
        </div>
      })}

      <div>
        <FormRecurringDates />
      </div>

      {/* START DATE OF EVENT */}
      <div className="w-full mx-2 flex-1">
        {/* Note for user to understand the date boundaries. Added margin to seperate the date section from the event info */}
        <p className={"text-xs mt-10 " + finalDateHidden}>Note: Start Date and End Date cannot be more than 90 days apart, and both must be in 2023.</p>
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          {firstDateTitle}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="date" // Date input type
            onChange={handleChange}
            value={formData["initialDate"] || ""}
            name="initialDate"
            placeholder="Start Date"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
            required
            min={format(new Date(), 'yyyy-MM-dd')}
            max='2023-12-31'
          />
        </div>
      </div>

      {/* END DATE OF EVENT */}
      <div className={"w-full mx-2 flex-1 " + finalDateHidden}>
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          End Date
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="date"
            onChange={handleChange}
            value={formData["finalDate"] || ""}
            name="finalDate"
            placeholder="endDate"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
            required
            min={format(new Date(), 'yyyy-MM-dd')}
            max='2023-12-31'
          />
        </div>
      </div>

      {/* START TIME FIELD */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Start Time
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="time"
            onChange={handleChange}
            value={formData["startTime"] || ""}
            name="startTime"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>

      {/* END TIME FIELD */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          End Time
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="time"
            onChange={handleChange}
            value={formData["endTime"] || ""}
            name="endTime"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>

    </div>
  );
}