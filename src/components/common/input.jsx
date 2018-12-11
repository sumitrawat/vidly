import React from "react";
const Input = ({ value, fieldName, fieldText, mutedText, onUpdate }) => {
  return (
    <div className="form-group">
      <label htmlFor={fieldName}>{fieldText}</label>
      <input
        type="email"
        className="form-control"
        value={value}
        name={fieldName}
        id={fieldName}
        aria-describedby="Help"
        placeholder={"Enter" + fieldText}
        onChange={onUpdate}
      />
      <small id="" className="form-text text-muted">
        {mutedText}
      </small>
    </div>
  );
};

export default Input;
