import React, { useState } from "react";
import FormInput from "./FormInput";
const BasicDetails = ({ onNext }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    mobileNumber: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name*",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email*",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Date of Birth",
      label: "Date of Birth",
    },
    {
      id: 4,
      name: "mobileNumber",
      type: "text",
      placeholder: "Mobile Number",
      errorMessage: "Mobile number should of 10 digits",
      label: "Mobile Number",
      pattern: `^[0-9]{10}$`,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Basic Details</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Next</button>
      </form>
    </div>
  );
};

export default BasicDetails;
