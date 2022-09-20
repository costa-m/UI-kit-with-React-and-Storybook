import React from "react";
import { Button } from "./Button";
import { within } from "@storybook/testing-library";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    mode: {
      options: ["primary", "secondary", "secondary white"],
      control: { type: "radio" },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "Primary", value: "#6e41e2" },
        { name: "White", value: "white" },
        { name: "Red", value: "#db524e" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Button" };

export const PrimaryWithFocusState = Template.bind({});
PrimaryWithFocusState.args = { label: "Button" };
PrimaryWithFocusState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await canvas.getByRole("button").focus();
};

export const Secondary = Template.bind({});
Secondary.args = { label: "Button", mode: "secondary" };

export const SecondaryWithFocusState = Template.bind({});
SecondaryWithFocusState.args = { label: "Button", mode: "secondary" };
SecondaryWithFocusState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await canvas.getByRole("button").focus();
};

export const SecondaryWhite = Template.bind({});
SecondaryWhite.args = { label: "Button", mode: "secondary white" };
