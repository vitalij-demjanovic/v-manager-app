import { FolderKanban, HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function SidebarMenu() {
  return (
    <ul>
      <li className='mb-5 flex items-center transition duration-300 hover:text-[#94A3B8]'>
        <HomeIcon />
        <Link className='ml-3' href='/' title='Dashboard'>
          Dashboard
        </Link>
      </li>
      <li className='flex items-center transition duration-300 hover:text-[#94A3B8]'>
        <FolderKanban />
        <Link className='ml-3' href='/project' title='Dashboard'>
          Projects
        </Link>
      </li>
    </ul>
  );
}
