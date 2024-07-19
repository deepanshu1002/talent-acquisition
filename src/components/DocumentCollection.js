import React, { useState } from "react";
import "../styles/Common.css";
import FormInput from "./FormInput";

const DocumentCollection = ({ onNext }) => {
  const [values, setValues] = useState({
    class10: "",
    class12: "",
    graduation: "",
    postGraduation: "",
    resume: "",
    recommendation: "",
    salarySlips: "",
    others: "",
  });

  const inputs = [
    {
      id: 1,
      name: "class10",
      type: "file",
      placeholder: "Attach file",
      label: "10th Marksheet*",
      required: true,
    },
    {
      id: 2,
      name: "class12",
      type: "file",
      placeholder: "Attach file",
      label: "12th Marksheet*",
      required: true,
    },
    {
      id: 3,
      name: "graduation",
      type: "file",
      placeholder: "Attach file",
      label: "Graduation Marksheet*",
      required: true,
    },
    {
      id: 4,
      name: "postGraduation",
      type: "file",
      placeholder: "Attach file",
      label: "Post Graduation Marksheet",
    },
    {
      id: 5,
      name: "resume",
      type: "file",
      placeholder: "Attach file",
      label: "Resume/CV*",
      required: true,
    },
    {
      id: 6,
      name: "recommendation",
      type: "file",
      placeholder: "Attach file",
      label: "Recommendation Letter",
    },
    {
      id: 7,
      name: "salerySlips",
      type: "file",
      placeholder: "Attach file",
      label: "Salary Slips",
    },
    {
      id: 8,
      name: "others",
      type: "file",
      placeholder: "Attach file",
      label: "Others",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const onChange = (e) => {
    const { name, files } = e.target;
    setValues({ ...values, [name]: files[0] });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Document Collection</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} onChange={onChange} />
        ))}
        <button>Next</button>
      </form>
    </div>
  );
};

export default DocumentCollection;
