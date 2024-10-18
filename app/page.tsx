import ProjectCard from '@/components/ProjectCard';
import CreateProjectForm from '@/components/CreateProjectForm';

export default function Home() {
  return (
    <div className='py-10'>
      <div className='align-center mb-10 flex justify-between'>
        <h1 className='text-3xl'>Projects</h1>
        <CreateProjectForm />
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
