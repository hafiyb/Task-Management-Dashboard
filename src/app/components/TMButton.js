const sizes = {
  small: 'p-2 px-4',
  standard: 'p-3 px-6',
  large: 'p-4 px-8',
};

const variants = {
  contained: 'bg-blueMain text-offWhite hover:bg-blueHover',
  outlined: 'border-2 border-blueMain bg-transparent',
  ghost: 'bg-transparent',
};

const fontSizes = {
  small: 'text-sm',
  standard: 'text-base',
  large: 'text-lg',
};

const TMButton = ({ children, className, size, variant, disabled, ...rest }) => {
  return (
    <button
      className={`box-border rounded-md text-darkText ${className} ${
        size ? `${sizes[size]} ${fontSizes[size]}` : `${sizes['standard']} ${fontSizes['standard']}`
      }
      ${variant ? variants[variant] : variants['contained']}
      ${disabled && 'bg-grayText hover:cursor-default'}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TMButton;
