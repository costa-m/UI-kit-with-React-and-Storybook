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

export const WithTwoOptions = Template.bind({});
WithTwoOptions.args = {
  label: "Choose a fruit",
  options: [
    { value: "grapefruit", label: "Grapefruit" },
    { value: "lime", label: "Lime" },
  ],
};

export const WithThreeOptions = Template.bind({});
WithThreeOptions.args = {
  label: "Choose a fruit",
  options: [
    { value: "grapefruit", label: "Grapefruit" },
    { value: "banana", label: "Banana" },
    { value: "lime", label: "Lime" },
  ],
};

export const WithNoOptions = Template.bind({});
WithNoOptions.args = {
  label: "no options",
};

export const WithManyOptions = Template.bind({});
WithManyOptions.args = {
  label: "Choose a fruit",
  options: [
    { value: "grapefruit", label: "Grapefruit" },
    { value: "banana", label: "Banana" },
    { value: "lime", label: "Lime" },
    { value: "lime", label: "Lime" },
    { value: "pineapple", label: "Pineapple" },
    { value: "apple", label: "Apple" },
  ],
};
