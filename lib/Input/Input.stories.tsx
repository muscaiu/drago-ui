import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Text: Story = {
  args: {
    id: 'text',
    label: 'Text',
    placeholder: 'Text here',
    required: true,
  },
};

export const Email: Story = {
  args: {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true,
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '*****',
    required: true,
  },
};
