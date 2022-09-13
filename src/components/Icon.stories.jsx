import React from "react";
import { Icon } from "./Icon";
import { ICONS } from "./assets/icon_paths";

export default {
  title: "Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Icon24px = Template.bind({});
Icon24px.args = {
  iconPath: ICONS.ARROW_DOWN,
  size: 24,
};
export const Icon48px = Template.bind({});
Icon48px.args = {
  iconPath: ICONS.ARROW_DOWN,
  size: 48,
};
