import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LVjU3AfRMGBi6qU8jQVxud/test-design?t=A8kHlqCQg7uIbSm2-0',
      accessToken: import.meta.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  // tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = (args: ButtonProps) => <Button {...args} />;
Primary.args = {
  children: 'Click me!',
  primary: true,
  onClick: () => console.log('Clicked!'),
};

export const Secondary: Story = (args: ButtonProps) => <Button {...args} />;
Secondary.args = {
  children: 'Click me!',
  size: 'small',
  onClick: () => console.log('Clicked!'),
};
