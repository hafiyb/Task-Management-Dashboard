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
  xl: 'text-xl',
};

const TMButton = ({
  children,
  className,
  size,
  fontSize,
  variant,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`box-border rounded-md text-darkText ${className} ${
        size
          ? `${sizes[size]} ${fontSizes[size]}`
          : `${sizes['standard']} ${fontSizes['standard']}`
      }
      ${fontSize ? `${fontSizes[fontSize]}` : `${fontSizes['standard']}`}
      ${variant ? variants[variant] : variants['contained']}
      ${disabled && 'bg-grayText hover:bg-grayText hover:cursor-default'}
      `}
      onClick={() => !disabled && onClick()}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TMButton;
