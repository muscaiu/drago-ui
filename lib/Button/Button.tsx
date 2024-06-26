export type ButtonProps = {
  children: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  size = 'medium',
  type = 'submit',
  onClick,
  ...props
}: ButtonProps) => {
  const classes = `
    text-white py-2 px-4 rounded
    ${primary ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 hover:bg-gray-500'}
    ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-xl' : 'text-base'}
  `;

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
