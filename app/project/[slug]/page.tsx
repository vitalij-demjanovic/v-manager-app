import { getProjectBySlug } from '@/lib/product/project';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='py-10'>
      <h1 className='text-3xl'>{project.name}</h1>
    </div>
  );
}
