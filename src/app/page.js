'use client';
import TMTaskCard from './components/TMTaskCard';
import TMText from './components/TMText';
import { useState } from 'react';

let mockData = [
  {
    title: 'This is a task',
    description: 'This is a description',
    dueDate: new Date(),
  },
  {
    title: 'This is a task',
    description: 'This is a description',
    dueDate: new Date(),
  },
  {
    title: 'This is a task',
    description: 'This is a description',
    dueDate: new Date(),
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className='flex min-w-full min-h-full'>
      <div className='flex-col w-[30%] min-h-full p-12'>
        <TMText fontSize={'large'} className='underline mb-6'>
          To do
        </TMText>
        {mockData.map((task, index) => (
          <div>
            <TMTaskCard
              {...task}
              active={index === activeCard}
              onClick={() => setActiveCard(index)}
              onComplete={() => console.log('ayy')}
            />
          </div>
        ))}
      </div>
      <div className='flex-col w-[30%] min-h-full p-12'>
        <TMText fontSize={'large'} className='underline mb-6'>
          Completed
        </TMText>
        {mockData.map((task, index) => (
          <div>
            <TMTaskCard
              {...task}
              active={index === activeCard}
              onClick={() => setActiveCard(index)}
              onComplete={() => console.log('ayy')}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
