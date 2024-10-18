import { format } from 'date-fns';

interface ProjectCartI {
  name: string;
  deadline: Date;
}

export default function ProjectCard(project: ProjectCartI) {
  const formattedDeadline = format(project.deadline, 'MMMM dd, yyyy');

  return (
    <div className='rounded-md p-5 shadow-lg'>
      <div className='mb-4'>
        <h3 className='text-xl font-semibold'>{project.name}</h3>
        <span className='text-xs text-gray-400'>{formattedDeadline}</span>
      </div>
      <div className='mb-6'>
        <ul className='text-light mb-1 list-disc pl-[15px] text-sm text-gray-400'>
          <li>No tasks available</li>
          <li>No tasks available</li>
          <li>No tasks available</li>
        </ul>
      </div>
    </div>
  );
}
