export default function ProjectCard() {
  return (
    <div className='rounded-md p-5 shadow-lg'>
      <div className='mb-4'>
        <h3 className='text-xl font-semibold'>Main Project</h3>
        <span className='text-xs text-gray-400'>Today</span>
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
