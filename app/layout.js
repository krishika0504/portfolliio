import './globals.css';
import { JetBrains_Mono, Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Krishika Rajput | DevOps Engineer & Full Stack Developer',
  description:
    'A polished white-and-rose portfolio experience built with Next.js, Three.js, Anime.js, and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${jetbrainsMono.variable} bg-site text-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
