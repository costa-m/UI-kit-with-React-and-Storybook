import React from "react";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Input {...args} />;

export const DefaultFilled = Template.bind({});
DefaultFilled.args = {
  label: "Your name",
};
