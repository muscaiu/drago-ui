import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Drago-UI/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Text: Story = {
  args: {
    placeholder: 'type something...',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'john.doe@Drago-UI.com',
    required: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '*****',
    required: true,
  },
};
