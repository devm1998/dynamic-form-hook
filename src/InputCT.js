import React from "react";
import { Form } from "react-bootstrap";

const InputCT = ({ value, onChange, type, ...rest }) => {
  switch (type) {
    case "text":
      return (
        <Form.Control
          placeholder={rest?.placeholder}
          onChange={onChange}
          value={value}
        />
      );
    case "email":
      return (
        <Form.Control
          type="email"
          placeholder={rest?.placeholder}
          onChange={onChange}
          value={value}
        />
      );
    case "radio":
      return rest?.options.map((e) => (
        <Form.Check
          type="radio"
          key={e}
          label={e}
          value={e}
          onChange={onChange}
          checked={value === e}
        />
      ));
    case "dropdown":
      return (
        <Form.Select
          aria-label="Default select example"
          onChange={onChange}
          value={value}
        >
          {rest?.options.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </Form.Select>
      );

    case "checkbox":
      return <Form.Check label={rest?.checkboxLabel} onChange={onChange} />;
    case "switch":
      return (
        <Form.Check
          type="switch"
          label={rest?.checkboxLabel}
          onChange={onChange}
        />
      );

    default:
      return null;
  }
};

export default InputCT;
