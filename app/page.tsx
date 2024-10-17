import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className='py-10'>
      <div className='align-center mb-10 flex justify-between'>
        <h1 className='text-3xl'>Projects</h1>
        <Button variant='default' className='flex items-center'>
          <PlusIcon size={18} className='mr-3' />
          New project
        </Button>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
