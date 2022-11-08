import React, { useState } from "react";
import styles from "./Input.module.css";

export const Input = ({ label }) => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className={styles.input}>
      <div className={styles.inputOptionChosen}>
        <div className={styles.chosenValueWrapper}>
          <div className={styles.smallDefault}>{label}</div>
          <input
            type="text"
            className={styles.inputElement}
            value={state}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
