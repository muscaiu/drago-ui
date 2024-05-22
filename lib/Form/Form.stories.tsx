import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormField, FormProps } from './Form';
import { loginUserSchema, registerUserSchema } from '../validators';

const meta: Meta<FormProps> = {
  title: 'Drago-UI/Form',
  component: Form,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<FormProps>;

const loginFields: FormField[] = [
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
];

const registerFields: FormField[] = [
  { label: 'Name', name: 'name', placeholder: 'Name', type: 'text' },
  { label: 'Email', name: 'email', placeholder: 'Email', type: 'email' },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    type: 'password',
  },
];

export const Login: Story = {
  args: {
    onSubmit: (data) => console.log('Login form submitted with data:', data),
    fields: loginFields,
    validationSchema: loginUserSchema,
  },
};

export const Register: Story = {
  args: {
    onSubmit: (data) => console.log('Register form submitted with data:', data),
    fields: registerFields,
    validationSchema: registerUserSchema,
  },
};
