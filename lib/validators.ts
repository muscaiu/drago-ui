import { object, string, TypeOf } from 'zod';

export const loginUserSchema = object({
  email: string()
    .min(1, 'Email is required')
    .email('Invalid email or password'),
  password: string().min(1, 'Password is required'),
});
export const registerUserSchema = object({
  name: string().min(3, 'Name is required'),
  email: string()
    .min(1, 'Email is required')
    .email('Invalid email or password'),
  password: string().min(1, 'Password is required'),
  confirmPassword: string().min(1, 'Confirm password is required'),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>;
export type RegisterUserInput = TypeOf<typeof registerUserSchema>;
