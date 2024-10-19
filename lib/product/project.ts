import prisma from '@/lib/prisma';

interface ProjectI {
  name: string;
  description?: string | null;
  deadline: Date;
  slug: string;
}

export async function createProject(data: ProjectI) {
  try {
    const project = await prisma.project.create({
      data: {
        name: data.name,
        deadline: data.deadline,
        description: data.description,
        slug: data.slug
      }
    });
    return { project };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: 'Failed to create the project.' };
    }
  }
}

export async function getAllProjects() {
  return await prisma.project.findMany();
}
