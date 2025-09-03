import React from "react";

// Field component - A reusable form input component that can render either an input or textarea
// based on the provided type prop. It supports validation feedback and styling based on field state.
const Field = ({
  type = "text", // Type of input field, defaults to "text"
  name,
  value,
  placeholder,
  error,         // Validation error message for the field
  touched,       // Boolean indicating if field has been interacted with
  onChange,      // Handler function for value change events
  onBlur,        // Handler function for when field loses focus
}) => {

  // Determine if the field should show validation errors
  // Only shows errors if the field has been both touched and has an error
  const isInvalid = touched && error;

  const className = `form-control input-effect${isInvalid ? " is-invalid" : ""}${type === "textarea" ? " auto-expand" : ""}`;

  return (
    <div className="mb-3">
      {/* Conditionally render either textarea or input based on type prop */}
      {type === "textarea" ? (
        <textarea
          name={name}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={e => e.target.classList.add("active-field")} // Add highlighting class when field receives focus
          onBlur={e => {
            e.target.classList.remove("active-field");          // Remove highlighting when focus is lost
            onBlur(e);
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={e => e.target.classList.add("active-field")} // Add highlighting class when field receives focus 
          onBlur={e => {
            e.target.classList.remove("active-field");          // Remove highlighting when focus is lost
            onBlur(e);
          }}
        />
      )}
      {/* Show error message only if field is invalid (touched and has error) */}
      {isInvalid && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Field;
