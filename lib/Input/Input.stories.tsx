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

export const WithLabel: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'john.doe@Drago-UI.com',
  },
};

export const WithLabelRequired: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '*****',
    required: true,
  },
};
