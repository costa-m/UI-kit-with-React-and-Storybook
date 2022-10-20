import React from "react";
import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Choose a fruit" };
