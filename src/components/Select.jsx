import React, { useState } from "react";
import propTypes from "prop-types";
import styles from "./Select.module.css";
import { Icon } from "./Icon";
import { ICONS } from "./assets/icon_paths";

/*
 * The logic and style for this component was adapted from
 * https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls
 */
export const Select = ({ label, items = [], ...props }) => {
  const initialOptionHighlight = {};
  for (const item of items) {
    initialOptionHighlight[item.value] = false;
  }

  const initialOptionClick = {};
  for (const item of items) {
    initialOptionClick[item.value] = false;
  }

  const [optionHighlight, setOptionHighlight] = useState(
    initialOptionHighlight
  );
  const [optionClick, setOptionClick] = useState(initialOptionClick);

  const [optionListIsHidden, setListIsHidden] = useState(true);

  const [chosenOption, setChosenOption] = useState(-1);
  const [highlightedOption, setHighlightedOption] = useState(-1);

  const highlightOption = (event) => {
    if (event.target.dataset.index) {
      // if statement is needed because event will be triggered
      // when mouse is over the scroll bar inside the option list
      const index = Number(event.target.dataset.index);
      const name = items[index].value;
      setHighlightedOption(index);
      setOptionHighlight({
        ...initialOptionHighlight, //highlight is removed from other items
        [name]: true,
      });
    }
  };

  const unHighlightOption = () => {
    setHighlightedOption(-1);
    setOptionHighlight({
      ...initialOptionHighlight,
    });
  };

  const selectOption = (event) => {
    const index = Number(event.target.dataset.index);

    setChosenOption(index);
    const name = items[index].value;
    setOptionClick({
      ...initialOptionClick, //selection is removed from other items
      [name]: true,
    });
  };

  const toggleOptionList = () => {
    setListIsHidden(!optionListIsHidden);
  };

  const closeOptionList = () => {
    setListIsHidden(true);
    //remove highlight when list closes
    setHighlightedOption(-1);
    setOptionHighlight({
      ...initialOptionHighlight,
    });
  };

  const keyControl = (event) => {
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
    if (items.length === 0) {
      return;
    }

    if (event.key === "Enter") {
      if (highlightedOption !== -1) {
        setChosenOption(highlightedOption);
        setOptionClick({
          ...initialOptionClick, //selection is removed from other items
          [items[highlightedOption].value]: true,
        });
        closeOptionList();
      }
      return;
    }

    // if list is hidden an option is chosen, otherwise an option
    // is highlighted
    if (optionListIsHidden) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        let nextIndex;
        if (event.key === "ArrowDown") {
          // if there is no chosen value, it picks the first one
          if (chosenOption === -1) {
            nextIndex = 0;
          } else {
            let currentIndex = chosenOption;
            nextIndex =
              currentIndex === items.length - 1
                ? currentIndex
                : currentIndex + 1;
          }
        }
        if (event.key === "ArrowUp") {
          // if there is no chosen value, it picks the first one
          if (chosenOption === -1) {
            nextIndex = 0;
          } else {
            let currentIndex = chosenOption;
            nextIndex = currentIndex === 0 ? currentIndex : currentIndex - 1;
          }
        }
        setChosenOption(nextIndex);
        setOptionClick({
          ...initialOptionClick, //selection is removed from other items
          [items[nextIndex].value]: true,
        });
      }
    } else {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        let nextIndex;
        if (event.key === "ArrowDown") {
          // if there is no chosen value, it picks the first one
          if (highlightedOption === -1) {
            nextIndex = 0;
          } else {
            let currentIndex = highlightedOption;
            nextIndex =
              currentIndex === items.length - 1
                ? currentIndex
                : currentIndex + 1;
          }
        }
        if (event.key === "ArrowUp") {
          // if there is no chosen value, it picks the first one
          if (highlightedOption === -1) {
            nextIndex = 0;
          } else {
            let currentIndex = highlightedOption;
            nextIndex = currentIndex === 0 ? currentIndex : currentIndex - 1;
          }
        }
        setHighlightedOption(nextIndex);
        setOptionHighlight({
          ...initialOptionHighlight, //highlight is removed from other items
          [items[nextIndex].value]: true,
        });
      }
    }
  };

  const SelectItemChosen = () => {
    return (
      <div onClick={toggleOptionList} className={styles.selectItemChosen}>
        <div className={styles.chosenValueWrapper}>
          <div className={styles.smallDefault}>{label}</div>
          {items[chosenOption].label}
        </div>
        <Icon
          iconPath={optionListIsHidden ? ICONS.ARROW_DOWN : ICONS.ARROW_UP}
          size={24}
        />
      </div>
    );
  };

  const SelectItemDefault = () => {
    return (
      <div onClick={toggleOptionList} className={styles.selectItemDefault}>
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
      {chosenOption === -1 ? <SelectItemDefault /> : <SelectItemChosen />}
      {optionListIsHidden || (
        <ul
          onMouseOver={highlightOption}
          onMouseLeave={unHighlightOption}
          onClick={selectOption}
          className={styles.selectList}
        >
          {/* container for each option */}
          {/* it is ok to use the index as key because the list won't change*/}
          {items.map((item, index) => (
            <SelectItem
              isHighlighted={optionHighlight[item.value]}
              isClicked={optionClick[item.value]}
              key={index}
              index={index}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </ul>
      )}
    </div>
  );
};

const SelectItem = ({
  children,
  value,
  index,
  isClicked = false,
  isHighlighted = false,
}) => {
  const className = isHighlighted
    ? styles.selectListItemHighlight
    : styles.selectListItem;
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
   * array of options. Each option has a value and a label.
   * The label will be displayed.
   */
  items: propTypes.arrayOf(
    propTypes.exact({
      value: propTypes.string,
      label: propTypes.string,
    })
  ),
};
