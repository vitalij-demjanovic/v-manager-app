'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { createProjectAction } from '@/lib/product/actions';

export default function CreateProjectForm() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='default' className='flex items-center'>
            <PlusIcon size={18} className='mr-3' />
            New project
          </Button>
        </DialogTrigger>
        <DialogTitle title='Create Project' />
        <DialogContent>
          <form action={createProjectAction}>
            <div>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input
                id='name'
                name='name'
                placeholder='Name project...'
                className='col-span-3'
              />
            </div>
            <div>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Textarea
                id='description'
                name='description'
                placeholder='Type description project...'
              />
            </div>
            <div>
              <Label htmlFor='deadline' className='text-right'>
                Deadline
              </Label>
              <Input
                id='deadline'
                name='deadline'
                type='date'
                className='col-span-3 mb-3'
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type='submit'>Save project</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
