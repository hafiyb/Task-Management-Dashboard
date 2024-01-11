import TMButton from './TMButton';
import TMText from './TMText';

const TMTaskCard = ({
  title,
  description,
  dueDate,
  active,
  onComplete,
  ...rest
}) => {
  let overdue = new Date() > dueDate;

  return (
    <div
      className='flex py-5 px-4 mb-3 w-full bg-offWhite rounded-md hover:cursor-pointer'
      {...rest}
    >
      <div
        className={`h-full rounded-full min-w-1 ${
          active ? 'bg-blueMain' : overdue ? 'bg-redMain' : 'bg-transparent'
        }`}
      />
      <div className='flex flex-col justify-between h-full min-w-full pl-5 gap-4'>
        <TMText fontSize={'large'} className='underline'>
          {title}
        </TMText>
        <TMText>{description}</TMText>
        <TMText fontSize={'small'} className='text-grayText'>
          Due by {new Date(dueDate).toDateString()}
        </TMText>
        {active && (
          <TMButton onClick={() => onComplete()}>Mark as complete</TMButton>
        )}
      </div>
    </div>
  );
};

export default TMTaskCard;
