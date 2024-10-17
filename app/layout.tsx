import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const jetBrains = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'V-Manager',
  description: 'Project management app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={jetBrains.className}>
        <div className='flex'>
          <Sidebar />
          <main className='min-h-screen w-full bg-slate-50 px-8'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
