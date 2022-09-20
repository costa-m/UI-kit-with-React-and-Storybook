import React from "react";
import { Island } from "./Island";
import { ICONS } from "./assets/icon_paths";

export default {
  title: "Island",
  component: Island,
};

const Template = (args) => <Island {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  badgeLabel: "Your text",
  heading: "Head",
  description: "Description",
  buttonLabel: "Button",
  iconLabelA: "Param A",
  iconPathA: ICONS.ARROW_DOWN,
  iconLabelB: "Param B",
  iconPathB: ICONS.ARROW_DOWN,
};
