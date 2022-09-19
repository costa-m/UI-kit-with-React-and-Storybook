import React from "react";
import styles from "./Badge.module.css";
import propTypes from "prop-types";

export const Badge = ({ label, mode, ...props }) => {
  // default mode for the bacge
  let className = styles.badgePrimary;
  if (mode === "secondary") {
    className = styles.badgeSecondary;
  } else if (mode === "white") {
    className = styles.badgeWhite;
  }
  return (
    <div className={className} {...props}>
      {label}
    </div>
  );
};

Badge.propTypes = {
  /**
   * Mode of the badge
   */
  mode: propTypes.oneOf(["primary", "secondary", "white"]),
  /**
   * Contents of the button
   */
  label: propTypes.string,
};

Badge.defaultProps = {
  mode: "primary",
};
