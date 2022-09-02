import React from "react";
import { Button } from "./Button";
import { within } from "@storybook/testing-library";

export default {
  title: "Button",
  component: Button,
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
