import React from "react";
import styles from "./Button.module.css";

export const Button = ({ mode, label, ...props }) => {
  // default mode for the button
  let className = styles.buttonPrimary;
  if (mode === "secondary") {
    className = styles.buttonSecondary;
  }

  return (
    <button className={className} {...props} type="button">
      {label}
    </button>
  );
};
