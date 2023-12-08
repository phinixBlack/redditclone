import { cn } from '@/lib/utils';
import '@/styles/globals.css'
import { Inter } from "next/font/google"
import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate-900 antialiased ligh', inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 antialised'>
      <Navbar />
        <div className='cantainer max-w-7xl mx-auto h-full pt-12'>
           {children}
          </div>
      </body>
    </html>
  )
}
