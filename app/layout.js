import './globals.css'
import { JetBrains_Mono, Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Krishika Rajput | DevOps Engineer & Full Stack Developer',
  description:
    'Modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} bg-site text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
