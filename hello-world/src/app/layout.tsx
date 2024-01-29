import './global.scss'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-svh'>
      <header className="bg-blue-950 p-5 w-full fixed top-0 left-0 right-0 text-white">
        header
      </header>
      <main className="py-24 px-5 h-svh">
        {children}
      </main>
      <footer className="bg-blue-400 p-5 w-full fixed bottom-0 left-0 right-0">
        footer
      </footer>
      </body>
    </html>
  )
}
