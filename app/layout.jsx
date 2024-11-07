import '@/global.css'

export const metadata = {
  title: '?',
  description: '?',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
