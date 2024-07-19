import React, { useState } from "react";
import FormInput from "./FormInput";
import "../styles/Common.css";

const StatementPurpose = ({ onNext }) => {
  const [values, setValues] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const inputs = [
    {
      id: 1,
      name: "q1",
      type: "textarea",
      label:
        "Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?",
      errorMessage: "Answer is required and should not exceed 300 words!",
      required: true,
      maxLength: 300,
    },
    {
      id: 2,
      name: "q2",
      type: "textarea",
      label:
        "Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?",
      errorMessage: "Answer is required and should not exceed 300 words!",
      required: true,
      maxLength: 300,
    },
    {
      id: 3,
      name: "q3",
      type: "textarea",
      label:
        "What are the three things that are most important to you in a job?",
      errorMessage: "Answer is required and should not exceed 300 words!",
      required: true,
      maxLength: 300,
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
        <h1>Statement of Purpose</h1>
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
        <button>Next</button>
      </form>
    </div>
  );
};

export default StatementPurpose;
