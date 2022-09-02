import React from "react";
import styles from "./Button.module.css";

export const Button = ({ label, ...props }) => {
  return (
    <button className={styles.button} {...props} type="button">
      {label}
    </button>
  );
};
