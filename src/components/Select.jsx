import React, { useState } from "react";
import styles from "./Select.module.css";
import { Icon } from "./Icon";
import { ICONS } from "./assets/icon_paths";

/*
 * The logic for this component was adapted from
 * https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls
 */
export const Select = ({ mode, label, ...props }) => {
  const initialOptionClass = {
    grapefruit: "item",
    lime: "item",
  };

  const initialOptionClick = {
    grapefruit: false,
    lime: false,
  };

  const [optionClass, setOptionClass] = useState(initialOptionClass);
  const [optionClick, setOptionClick] = useState(initialOptionClick);

  const [optionListIsHidden, setListIsHidden] = useState(true);

  const [chosenOption, setChosenOption] = useState(label);

  const highlightOption = (event) => {
    const name = event.target.getAttribute("value");
    setOptionClass({
      ...initialOptionClass,
      [name]: "itemHighlight",
    });
  };

  const selectOption = (event) => {
    const text = event.target.innerText;
    setChosenOption(text);

    const name = event.target.getAttribute("value");
    setOptionClick({
      ...initialOptionClick,
      [name]: true,
    });
  };

  const toggleOptionList = () => {
    setListIsHidden(!optionListIsHidden);
  };

  const closeOptionList = () => {
    setListIsHidden(true);
    setOptionClass({
      ...initialOptionClass,
    });
  };

  const blurSelect = (event) => {
    if (event.key === "Escape") {
      event.currentTarget.blur();
    }
  };

  return (
    <div
      className={styles.select}
      onKeyUp={blurSelect}
      onBlur={closeOptionList}
      tabIndex="0"
      {...props}
    >
      {/* container for current value */}
      <div onClick={toggleOptionList} className={styles.selectItemDefault}>
        {chosenOption}
        <Icon
          iconPath={optionListIsHidden ? ICONS.ARROW_DOWN : ICONS.ARROW_UP}
          size={24}
        />
      </div>
      {optionListIsHidden || (
        <ul
          onMouseOver={highlightOption}
          onClick={selectOption}
          className={styles.optionList}
        >
          {/* container for other options */}
          <SelectItem
            className={optionClass.grapefruit}
            isClicked={optionClick.grapefruit}
            value="grapefruit"
          >
            Grapefruit
          </SelectItem>
          <SelectItem
            className={optionClass.lime}
            isClicked={optionClick.lime}
            value="lime"
          >
            Lime
          </SelectItem>
        </ul>
      )}
    </div>
  );
};

const SelectItem = ({ children, className, value, isClicked = false }) => {
  let _className = styles.selectItem;

  if (className === "itemHighlight") {
    _className = styles.selectItemHighlight;
  }
  return (
    <li className={_className} value={value}>
      {children}
      {isClicked && <Icon iconPath={ICONS.CHECKED} size={24} />}
    </li>
  );
};
