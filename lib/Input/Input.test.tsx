import { render } from '@testing-library/react';
import { Input } from './Input';

describe(`Component: ${Input.name}`, () => {
  it('should render', () => {
    const { container } = render(<Input label="Text" />);
    expect(container).toBeInTheDocument();
  });

  it('renders the label', () => {
    const { getByText } = render(<Input label="Text" />);
    expect(getByText(/Text/)).toBeInTheDocument();
  });

  it('renders the input with correct placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input label="Text" placeholder="Text here" />
    );
    expect(getByPlaceholderText('Text here')).toBeInTheDocument();
  });

  it('should have the correct type attribute', () => {
    const { getByLabelText } = render(<Input label="Email" type="email" />);
    expect(getByLabelText(/Email/)).toHaveAttribute('type', 'email');
  });

  it('should be required if the required prop is passed', () => {
    const { getByLabelText } = render(<Input label="Text" required />);
    expect(getByLabelText(/Text/)).toBeRequired();
  });

  it('should not render a label if the label prop is not provided', () => {
    const { queryByText } = render(<Input />);
    expect(queryByText(/Text/)).not.toBeInTheDocument();
  });
});
