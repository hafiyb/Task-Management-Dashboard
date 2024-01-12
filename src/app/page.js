'use client';
import { useDispatch, useSelector } from 'react-redux';
import TMTaskCard from './components/TMTaskCard';
import TMText from './components/TMText';
import { useEffect, useState } from 'react';
import {
  useCompleteTaskMutation,
  useDeleteTaskMutation,
  useGetCompletedTasksQuery,
  useGetTasksQuery,
} from './api/tasks';
import { setCompletedTasks, setPendingTasks } from '@/slices/tasks';

export default function Home() {
  const dispatch = useDispatch();

  // state declarations ==============================================================================================================

  const [activeCard, setActiveCard] = useState(null);

  const [width, setWidth] = useState(null);

  const { pendingTasks, completedTasks, currentPage } = useSelector(
    (state) => state.tasks
  );

  // api calls ==============================================================================================================

  const { data: pendingTasksData, isLoading: loadingPendingTasks } =
    useGetTasksQuery();

  const { data: completedTasksData, isLoading: loadingCompletedTasks } =
    useGetCompletedTasksQuery();

  const [triggerCompleteTask] = useCompleteTaskMutation();

  const [triggerDeleteTask] = useDeleteTaskMutation();

  // useEffects ==============================================================================================================

  useEffect(() => {
    if (pendingTasksData) {
      dispatch(setPendingTasks(pendingTasksData.data));
    }
    if (completedTasksData) {
      dispatch(setCompletedTasks(completedTasksData.data));
    }
  }, [pendingTasksData, completedTasksData]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  // functions ==============================================================================================================

  const handleComplete = (id) => {
    setActiveCard('');
    triggerCompleteTask(id);
  };

  const handleDelete = (id) => {
    setActiveCard('');
    triggerDeleteTask(id);
  };

  // component ==============================================================================================================

  return (
    <main className='flex min-w-full overflow-hidden'>
      <div className='flex-col w-[100vw] md:w-[calc(50vw-32px)] min-h-full p-4 md:p-8 overflow-hidden'>
        <TMText fontSize={'large'} className='underline mb-6'>
          {width < 640 ? currentPage : 'To do'}
        </TMText>
        <div className='h-[100%] overflow-auto pb-6'>
          {!loadingPendingTasks && currentPage === 'To do' ? (
            pendingTasks.map((task, index) => (
              <TMTaskCard
                key={`${task.attributes.title}-${index}-todo`}
                {...task.attributes}
                active={task.id === activeCard}
                onClick={() => setActiveCard(task.id)}
                overdue={new Date(task.attributes.dueDate) < new Date()}
                onComplete={() => {
                  handleComplete(task.id);
                }}
                onDelete={() => {
                  handleDelete(task.id);
                }}
              />
            ))
          ) : !loadingCompletedTasks && currentPage === 'Completed' ? (
            completedTasks.map((task, index) => (
              <TMTaskCard
                completed
                key={`${task.attributes.title}-${index}-completed`}
                {...task.attributes}
                onClick={() => setActiveCard(task.id)}
                overdue={new Date(task.attributes.dueDate) < new Date()}
                onComplete={() => {
                  handleComplete(task.id);
                }}
                onDelete={() => {
                  handleDelete(task.id);
                }}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      {width > 640 && (
        <div className='flex-col w-[100vw] md:w-[calc(50vw-32px)] min-h-full p-4 md:p-8 overflow-hidden'>
          <TMText fontSize={'large'} className='underline mb-6'>
            Completed
          </TMText>
          <div className='h-[100%] overflow-auto pb-6'>
            {!loadingCompletedTasks ? (
              completedTasks.map((task, index) => (
                <TMTaskCard
                  completed
                  key={`${task.attributes.title}-${index}-completed`}
                  {...task.attributes}
                  onClick={() => setActiveCard(task.id)}
                  overdue={new Date(task.attributes.dueDate) < new Date()}
                  onComplete={() => {
                    handleComplete(task.id);
                  }}
                  onDelete={() => {
                    handleDelete(task.id);
                  }}
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
