import TMButton from './TMButton';
import TMText from './TMText';

const TMTaskCard = ({
  title,
  description,
  dueDate,
  active,
  onComplete,
  onDelete,
  completed,
  overdue,
  ...rest
}) => {
  return (
    <div
      className={`flex py-5 px-4 mb-3 w-full bg-offWhite rounded-md relative ${
        !completed && 'hover:cursor-pointer'
      }`}
      {...rest}
    >
      <div
        className={`h-full rounded-full min-w-1 ${
          active
            ? 'bg-blueMain'
            : overdue && !completed
            ? 'bg-redMain'
            : 'bg-transparent'
        }`}
      />
      <div className='flex flex-col justify-between h-full min-w-full pl-5 gap-4'>
        <div className='flex justify-between'>
          <TMText fontSize={'large'} className='underline'>
            {title}
          </TMText>
          {/* task delete button */}
          <TMButton
            className={'absolute top-2 right-2 '}
            variant={'ghost'}
            onClick={() => {
              onDelete();
            }}
          >
            X
          </TMButton>
        </div>
        <TMText>{description}</TMText>
        <TMText fontSize={'small'} className='text-grayText'>
          Due by {new Date(dueDate).toDateString()}
        </TMText>
         {/* only show mark as complete button if task is not completed */}
        {active && (
          <TMButton onClick={() => onComplete()}>Mark as complete</TMButton>
        )}
      </div>
    </div>
  );
};

export default TMTaskCard;
