'use server';

import { TaskPriority, TaskProgress } from '@prisma/client';
import { createTask } from '@/lib/task/task';

export async function createTaskAction(task: FormData, projectId: number) {
  try {
    const name = task.get('name') as string;
    const priority = task.get('priority') as TaskPriority;
    const progress = task.get('progress') as TaskProgress;

    await createTask({
      projectId,
      name,
      priority,
      progress
    });
  } catch (error) {
    console.error('Error creating project:', error);
  }
}
