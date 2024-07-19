import { useState } from "react";
import "../styles/FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, options, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {inputProps.type === "select" ? (
        <select
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      ) : inputProps.type === "textarea" ? (
        <textarea
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
        />
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
