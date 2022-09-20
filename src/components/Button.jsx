import React from "react";
import styles from "./Button.module.css";
import propTypes from "prop-types";

export const Button = ({ mode, label, ...props }) => {
  // default mode for the button
  let className = styles.buttonPrimary;
  if (mode === "secondary") {
    className = styles.buttonSecondary;
  } else if (mode === "secondary white") {
    className = styles.buttonSecondaryWhite;
  }

  return (
    <button className={className} {...props} type="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Mode of the button
   */
  mode: propTypes.oneOf(["primary", "secondary", "secondary white"]),
  /**
   * Contents of the button
   */
  label: propTypes.string,
};

Button.defaultProps = {
  mode: "primary",
};
