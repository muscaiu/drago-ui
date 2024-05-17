import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Click me!",
    primary: true,
  },
};
export const Secondary: Story = {
  args: {
    label: "Click me!",
    size: "medium",
  },
};
