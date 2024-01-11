const fontSizes = {
  small: 'text-sm',
  standard: 'text-base',
  large: 'text-lg',
};

const TMText = ({ children, fontSize, className }) => {
  return (
    <p
      className={`text-darkText leading-normal ${
        fontSize ? fontSizes[fontSize] : fontSizes['standard']
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default TMText;
