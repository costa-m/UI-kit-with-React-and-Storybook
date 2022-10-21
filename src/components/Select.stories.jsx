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

export const WithTwoItems = Template.bind({});
WithTwoItems.args = {
  label: "Choose a fruit",
  items: [
    { value: "grapefruit", label: "Grapefruit" },
    { value: "lime", label: "Lime" },
  ],
};

export const WithThreeItems = Template.bind({});
WithThreeItems.args = {
  label: "Choose a fruit",
  items: [
    { value: "grapefruit", label: "Grapefruit" },
    { value: "banana", label: "Banana" },
    { value: "lime", label: "Lime" },
  ],
};

export const WithNoItems = Template.bind({});
WithNoItems.args = {
  label: "no items",
};

export const WithManyItems = Template.bind({});
WithManyItems.args = {
  label: "Choose a fruit",
  items: [
    { value: "grapefruit", label: "Grapefruit" },
    { value: "banana", label: "Banana" },
    { value: "lime", label: "Lime" },
    { value: "lime 2", label: "Lime" },
    { value: "pineapple", label: "Pineapple" },
    { value: "apple", label: "Apple" },
  ],
};
