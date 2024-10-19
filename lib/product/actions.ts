'use server';
import { createProject, getAllProjects } from '@/lib/product/project';
import { slugify } from '@/lib/slugify';

export async function createProjectAction(data: FormData) {
  try {
    const name = data.get('name') as string;
    const description = data.get('description') as string;
    const deadline = new Date(data.get('deadline') as string);

    const slug = slugify(name);

    await createProject({ name, description, deadline, slug });
  } catch (error) {
    console.error('Error creating project:', error);
  }
}

export async function getProjectsAction() {
  return await getAllProjects();
}
