import { render } from '@testing-library/react';
import { Input } from './Input';

describe(`Component: ${Input.name}`, () => {
  it('should render', () => {
    const { container } = render(<Input id="text" label="Text" />);
    expect(container).toBeInTheDocument();
  });

  it('renders the label', () => {
    const { getByText } = render(<Input id="text" label="Text" />);
    expect(getByText(/Text/)).toBeInTheDocument();
  });

  it('renders the input with correct placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input id="text" label="Text" placeholder="Text here" />
    );
    expect(getByPlaceholderText('Text here')).toBeInTheDocument();
  });

  it('should have the correct type attribute', () => {
    const { getByLabelText } = render(
      <Input id="email" label="Email" type="email" />
    );
    expect(getByLabelText(/Email/)).toHaveAttribute('type', 'email');
  });

  it('should be required if the required prop is passed', () => {
    const { getByLabelText } = render(
      <Input id="text" label="Text" required />
    );
    expect(getByLabelText(/Text/)).toBeRequired();
  });
});
