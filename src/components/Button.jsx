import React from "react";
import "./button.css";

export const Button = ({ label, ...props }) => {
  return (
    <button className="button" {...props} type="button">
      {label}
    </button>
  );
};
