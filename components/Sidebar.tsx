import Logo from '@/components/ui/Logo';
import { LogOut } from 'lucide-react';
import SidebarMenu from '@/components/SidebarMenu';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='flex h-screen flex-col justify-between px-8 py-5'>
      <Logo />
      <SidebarMenu />
      <div className='flex items-center transition duration-300 hover:text-[#94A3B8]'>
        <LogOut />
        <Link href='/' className='ml-3'>
          Log out
        </Link>
      </div>
    </div>
  );
}
