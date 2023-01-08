import React, { useEffect } from "react";
import { useFormContext } from "contexts/FormContext";
import { useAuthContext } from "contexts/AuthContext";

export default function FormCreateEvent() {

  const auth = useAuthContext();
  const { formData, setFormData, formCreateEventErrors } = useFormContext();
  // const {formCompleted, setFormCompleted} = useState();

  useEffect(() => {
    console.log("Got errors for formCreateEvent:", formCreateEventErrors);
  }, [formCreateEventErrors]);

  const handleChange = e => {

    const { name, value } = e.target;

    // TODO: These are devs notes, delete this line and possibly the rest before PRing
    // Using an anonymous function like so allows us to get the previous state of the data and extend it
    // [name]: value overrides the value at the [name] on which handleChange is called
    // e.g. if [name] is "title" in the form input, the value of "title" gets changed in formData
    // the data is then also extended by your Discord username
    setFormData(prevFormData => ({ ...prevFormData, [name]: value, discordName: auth.user?.displayName }));
  };


  //test

  // useEffect(() => { // Debug code
  //   console.log(formData);
  // }, [formData])


  return (
    <div className="flex flex-col">
      {formCreateEventErrors.map((error, index) => {
        return (
          <div class="alert alert-error shadow-lg text-red-700" key="index">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          </div>
        )
        // <p>{error}</p>
      })}

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Title
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={formData["title"] || ""}
            name="title"
            placeholder="Title"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>

        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
            Description
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              onChange={handleChange}
              value={formData["description"] || ""}
              name="description"
              placeholder="Description"
              className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
            />
          </div>
        </div>

      {/* LOCATION FIELD */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Location
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={formData["location"] || ""}
            name="location"
            placeholder="Location"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-grey-500 text-xs leading-8 uppercase">
          Discord Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            value={auth.user?.displayName || ""}
            name="discordName"
            disabled={true}
            placeholder="Discord Name"
            className="p-1 px-2 appearance-none outline-non w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}