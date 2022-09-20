import React from "react";
import styles from "./Island.module.css";
import propTypes from "prop-types";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Icon } from "./Icon";

export const Island = ({
  badgeLabel,
  heading,
  description,
  buttonLabel,
  iconPathA,
  iconLabelA,
  iconPathB,
  iconLabelB,
  ...props
}) => {
  return (
    <div className={styles.island} {...props}>
      <div>
        <div className={styles.badgeDiv}>
          <Badge label={badgeLabel} mode="secondary" />
        </div>
        <div>
          <div>
            <h6 className={styles.heading}>{heading}</h6>
            <p className={styles.paragraph}>{description}</p>
          </div>
          <div className={styles.footer}>
            <div className={styles.button}>
              <Button mode="secondary white" label={buttonLabel} />
            </div>
            <div className={styles.iconLabel}>
              {/* conditional rendering for the icon */}
              {iconPathA && (
                <span className={styles.icon}>
                  <Icon iconPath={iconPathA} fill="white" />
                </span>
              )}
              <span className={styles.paragraph}>{iconLabelA}</span>
            </div>
            <div className={styles.iconLabel}>
              {iconPathB && (
                <span className={styles.icon}>
                  <Icon iconPath={iconPathB} fill="white" />
                </span>
              )}
              <span className={styles.paragraph}>{iconLabelB}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Island.propTypes = {
  /**
   * Contents of the badge
   */
  badgeLabel: propTypes.string,
  /**
   * Contents of the heading
   */
  heading: propTypes.string,
  /**
   * Text description of the island
   */
  description: propTypes.string,
  /**
   * Contents of the button
   */
  badgeLabel: propTypes.string,
  /**
   * the path of the first svg icon described on a 24px canvas.
   * If this parameter is not given the icon component will not
   * be rendered
   */
  iconPathA: propTypes.string,
  /**
   * the text accompanying the first icon
   */
  iconLabelA: propTypes.string,
  /**
   * the path of the second svg icon described on a 24px canvas.
   * If this parameter is not given the icon component will not
   * be rendered
   */
  iconPathB: propTypes.string,
  /**
   * the text accompanying the second icon
   */
  iconLabelB: propTypes.string,
};
