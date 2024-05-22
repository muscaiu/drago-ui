import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { LoginUserInput, RegisterUserInput } from '../validators';

export type FormField = {
  label: string;
  name: keyof LoginUserInput | keyof RegisterUserInput;
  placeholder: string;
  type?: string;
};

export type FormProps = {
  onSubmit?: (data: LoginUserInput | RegisterUserInput) => void;
  fields: FormField[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema: any;
};
export const Form: React.FC<FormProps> = ({
  onSubmit,
  fields,
  validationSchema,
}: FormProps) => {
  const methods = useForm({
    resolver: zodResolver(validationSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitHandler = (values: any) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-sm">
        <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
          {fields.map((field) => (
            <div className="mb-2" key={field.name}>
              <Input
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
              />
            </div>
          ))}
          <div className="mt-4">
            <Button primary type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
