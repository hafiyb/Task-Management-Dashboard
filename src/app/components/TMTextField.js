import TMText from './TMText';

const fontSizes = {
  small: 'text-sm',
  standard: 'text-base',
  large: 'text-lg',
};

const TMTextField = ({ label, error, onChange, value, type}) => {
  return (
    <div className='flex flex-col'>
      {label && <label className='text-darkText mb-1'>{label}</label>}
      <input type={type || 'text'}
        className={`rounded-md p-1 text-darkText shadow-md  ${
          error && 'border-2 border-redMain'
        }`}
      onChange={(e) => onChange(e)}
      value={value}
      ></input>
      {/* for displaying error message, currently not used in this project */}
      {error && (
        <TMText className='text-redMain' fontSize={'small'}>
          {error}
        </TMText>
      )}
    </div>
  );
};

export default TMTextField;
