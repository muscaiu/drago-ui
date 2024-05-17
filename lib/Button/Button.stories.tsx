import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";


const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    design: {
      // type: "figspec",
      type: "figma",
      url: "https://www.figma.com/file/LVjU3AfRMGBi6qU8jQVxud/test-design?t=A8kHlqCQg7uIbSm2-0",
      accessToken: import.meta.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Click me!",
    primary: true,
    onClick: () => console.log("Clicked!"),
  },
};

export const Secondary: Story = {
  args: {
    label: "Click me!",
    size: "small",
    onClick: () => console.log("Clicked!"),
  },
};
