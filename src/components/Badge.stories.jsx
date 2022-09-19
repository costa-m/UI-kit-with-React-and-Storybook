import React from "react";
import { Badge } from "./Badge";

export default {
  title: "Bagde",
  component: Badge,
  argTypes: {
    mode: {
      options: ["primary", "secondary", "white"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Your text", mode: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Your text", mode: "secondary" };

export const White = Template.bind({});
White.args = { label: "Your text", mode: "white" };
