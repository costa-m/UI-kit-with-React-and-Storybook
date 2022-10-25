import React, { useState } from "react";
import propTypes from "prop-types";
import styles from "./Select.module.css";
import { Icon } from "./Icon";
import { ICONS } from "./assets/icon_paths";

/*
 * The logic and style for this component was adapted from
 * https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls
 */
export const Select = ({ label, options = [], ...props }) => {
  const [optionListIsHidden, setListIsHidden] = useState(true);
  const [chosenOption, setChosenOption] = useState(-1);
  const [highlightedOption, setHighlightedOption] = useState(-1);

  const highlightOption = (event) => {
    if (event.target.dataset.index) {
      // if statement is needed because event will be triggered
      // when mouse is over the scroll bar that appears inside
      // the option list when the list is big enough
      const index = Number(event.target.dataset.index);
      setHighlightedOption(index);
    }
  };

  const unHighlightOption = () => {
    setHighlightedOption(-1);
  };

  const selectOption = (event) => {
    const index = Number(event.target.dataset.index);
    setChosenOption(index);
  };

  const toggleOptionList = () => {
    setListIsHidden(!optionListIsHidden);
  };

  const closeOptionList = () => {
    setListIsHidden(true);
    //remove highlight when list closes
    setHighlightedOption(-1);
  };

  const keyControl = (event) => {
    // select component loses focus
    if (event.key === "Escape") {
      event.currentTarget.blur();
      return;
    }

    // opens list of options
    if (event.key === " " || event.key === "Spacebar") {
      setListIsHidden(false);
      return;
    }

    // Checks if list is not empty
    if (options.length === 0) {
      return;
    }

    // selects highlighted option and closes list
    if (event.key === "Enter") {
      if (highlightedOption !== -1) {
        setChosenOption(highlightedOption);
        closeOptionList();
      }
      return;
    }

    // if list is hidden, an option is chosen,
    // otherwise, an option is highlighted
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (optionListIsHidden) {
        upAndDownControl(chosenOption, setChosenOption, event.key);
      } else {
        upAndDownControl(highlightedOption, setHighlightedOption, event.key);
      }
    }
  };

  const upAndDownControl = (option, setOption, key) => {
    let nextIndex;
    // if there is no set value, it picks the first one
    if (option === -1) {
      nextIndex = 0;
    } else {
      let currentIndex = option;
      if (key === "ArrowDown") {
        nextIndex =
          currentIndex === options.length - 1 ? currentIndex : currentIndex + 1;
      }
      if (key === "ArrowUp") {
        nextIndex = currentIndex === 0 ? currentIndex : currentIndex - 1;
      }
    }
    setOption(nextIndex);
  };

  const SelectOptionChosen = () => {
    return (
      <div onClick={toggleOptionList} className={styles.selectOptionChosen}>
        <div className={styles.chosenValueWrapper}>
          <div className={styles.smallDefault}>{label}</div>
          {options[chosenOption].label}
        </div>
        <Icon
          iconPath={optionListIsHidden ? ICONS.ARROW_DOWN : ICONS.ARROW_UP}
          size={24}
        />
      </div>
    );
  };

  const SelectOptionDefault = () => {
    return (
      <div onClick={toggleOptionList} className={styles.selectOptionDefault}>
        {label}
        <Icon
          iconPath={optionListIsHidden ? ICONS.ARROW_DOWN : ICONS.ARROW_UP}
          size={24}
        />
      </div>
    );
  };

  return (
    <div
      className={styles.select}
      onKeyUp={keyControl}
      onBlur={closeOptionList}
      tabIndex="0"
      {...props}
    >
      {/* container for current value */}
      {chosenOption === -1 ? <SelectOptionDefault /> : <SelectOptionChosen />}
      {optionListIsHidden || (
        <ul
          onMouseOver={highlightOption}
          onMouseLeave={unHighlightOption}
          onClick={selectOption}
          className={styles.selectList}
        >
          {/* container for each option */}
          {/* it is ok to use the index as key because the list won't change*/}
          {options.map((option, index) => (
            <SelectOption
              isHighlighted={index === highlightedOption}
              isClicked={index === chosenOption}
              key={index}
              index={index}
              value={option.value}
            >
              {option.label}
            </SelectOption>
          ))}
        </ul>
      )}
    </div>
  );
};

const SelectOption = ({
  children,
  value,
  index,
  isClicked = false,
  isHighlighted = false,
}) => {
  const className = isHighlighted
    ? styles.selectListOptionHighlight
    : styles.selectListOption;
  return (
    <li className={className} value={value} data-index={index}>
      {children}
      {isClicked && <Icon iconPath={ICONS.CHECKED} size={24} />}
    </li>
  );
};

Select.propTypes = {
  /**
   * Default text
   */
  label: propTypes.string,
  /**
   * Array of options. Each option has a value and a label.
   * The label will be displayed.
   */
  options: propTypes.arrayOf(
    propTypes.exact({
      value: propTypes.string,
      label: propTypes.string,
    })
  ),
};
