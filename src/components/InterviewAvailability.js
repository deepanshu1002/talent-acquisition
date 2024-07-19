import React, { useState } from "react";
import "../styles/Common.css";
import FormInput from "./FormInput";

const InterviewAvailability = () => {
  const [values, setValues] = useState({
    email: "",
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "",
    interviewMedium: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "location",
      type: "text",
      placeholder: "Location",
      label: "Location",
      required: "true",
    },
    {
      id: 3,
      name: "interviewDate",
      type: "date",
      label: "Interview Date",
      required: true,
    },
    {
      id: 4,
      name: "interviewTime",
      type: "time",
      label: "Interview Time",
      required: true,
    },
    {
      id: 5,
      name: "timeZone",
      type: "select",
      label: "Time Zone",
      options: [
        { value: "", text: "Select Time Zone" },
        { value: "UTC-12:00", text: "UTC-12:00" },
        { value: "UTC-11:00", text: "UTC-11:00" },
        { value: "UTC-10:00", text: "UTC-10:00" },
      ],
      required: true,
    },
    {
      id: 6,
      name: "interviewMedium",
      type: "select",
      label: "Interview Medium",
      options: [
        { value: "", text: "Select Interview Medium" },
        { value: "In-Person", text: "In-Person" },
        { value: "Video Call", text: "Video Call" },
        { value: "Phone Call", text: "Phone Call" },
      ],
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ThankYou.. Your details have been submitted");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Interview Availability</h1>
        <div className="form-container">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InterviewAvailability;
