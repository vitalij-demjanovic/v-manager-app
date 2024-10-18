import ProjectCard from '@/components/ProjectCard';
import CreateProjectForm from '@/components/CreateProjectForm';
import { getProjectsAction } from '@/lib/product/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const projects = await getProjectsAction();

  return (
    <div className='py-10'>
      <div className='align-center mb-10 flex justify-between'>
        <h1 className='text-3xl'>Projects</h1>
        <CreateProjectForm />
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {projects &&
          projects.map(project => (
            <ProjectCard
              key={project.id}
              name={project.name}
              deadline={project.deadline}
            />
          ))}
      </div>
    </div>
  );
}
