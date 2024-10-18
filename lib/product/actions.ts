'use server';
import { createProject, getAllProjects } from '@/lib/product/project';

export async function createProjectAction(data: FormData) {
  try {
    const name = data.get('name') as string;
    const description = data.get('description') as string;
    const deadline = new Date(data.get('deadline') as string);

    await createProject({ name, description, deadline });
  } catch (error) {
    console.error('Error creating project:', error);
  }
}

export async function getProjectsAction() {
  return await getAllProjects();
}
