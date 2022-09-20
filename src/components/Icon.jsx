import React from "react";
import propTypes from "prop-types";

export const Icon = ({ iconPath, size, fill, ...props }) => {
  return (
    <svg
      {...props}
      // for now, the viewBox is hardcoded because we assume
      // the path describes a svg drawn on a 24px canvas
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d={iconPath}></path>
    </svg>
  );
};

Icon.propTypes = {
  /**
   * the path of svg icon described on a 24px canvas
   */
  iconPath: propTypes.string.isRequired,
  /**
   * size in pixels
   */
  size: propTypes.number,
  /**
  * color of icon
  */
  fill: propTypes.string,
};

Icon.defaultProps = {
  size: 24,
};
