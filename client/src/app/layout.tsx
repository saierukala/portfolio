import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import GlobalBackground from '@/components/GlobalBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import ToasterProvider from '@/components/ToasterProvider';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Sai E | Frontend Developer',
  description: 'Portfolio of Sai E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.className} bg-[#09090b] text-zinc-100 antialiased cursor-none`}>
        <CustomCursor />
        <ToasterProvider />
        <GlobalBackground>
          <Navbar />
          {children}
        </GlobalBackground>
      </body>
    </html>
  );
}
