import { Space_Mono } from 'next/font/google'

import '../src/assets/styles/global.scss'

const space_mono = Space_Mono({
    display: 'swap',
    subsets: [ 'latin' ],
    weight: [ '400', '700' ]
})

export default function RootLayout({ children } : Readonly < { children: React.ReactNode } > ) {
    return (
      <html>
          <body className = {space_mono.className}>
              {children}
          </body>
      </html>
    )
}