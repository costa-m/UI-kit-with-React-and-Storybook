import React, { useState } from "react";
import styles from "./Select.module.css";
import { Icon } from "./Icon";
import { ICONS } from "./assets/icon_paths";

/*
 * The logic and style for this component was adapted from
 * https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls
 */
export const Select = ({ mode, label, items = [], ...props }) => {
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

  const [chosenOption, setChosenOption] = useState(label);

  const highlightOption = (event) => {
    const name = event.target.getAttribute("value");
    setOptionHighlight({
      ...initialOptionHighlight, //highlight is removed from other items
      [name]: true,
    });
  };

  const selectOption = (event) => {
    const text = event.target.innerText;
    setChosenOption(text);

    const name = event.target.getAttribute("value");
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
    setOptionHighlight({
      ...initialOptionHighlight,
    });
  };

  const blurSelect = (event) => {
    if (event.key === "Escape") {
      event.currentTarget.blur();
    }
  };

  const SelectItemChosen = () => {
    return (
      <div onClick={toggleOptionList} className={styles.selectItemChosen}>
        <div className={styles.chosenValueWrapper}>
          <div className={styles.smallDefault}>{label}</div>
          {chosenOption}
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
        {chosenOption}
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
      onKeyUp={blurSelect}
      onBlur={closeOptionList}
      tabIndex="0"
      {...props}
    >
      {/* container for current value */}
      {chosenOption === label ? <SelectItemDefault /> : <SelectItemChosen />}
      {optionListIsHidden || (
        <ul
          onMouseOver={highlightOption}
          onClick={selectOption}
          className={styles.selectList}
        >
          {/* container for each option */}
          {items.map((item) => (
            <SelectItem
              isHighlighted={optionHighlight[item.value]}
              isClicked={optionClick[item.value]}
              key={item.value}
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
  isClicked = false,
  isHighlighted = false,
}) => {
  const className = isHighlighted
    ? styles.selectListItemHighlight
    : styles.selectListItem;
  return (
    <li className={className} value={value}>
      {children}
      {isClicked && <Icon iconPath={ICONS.CHECKED} size={24} />}
    </li>
  );
};
