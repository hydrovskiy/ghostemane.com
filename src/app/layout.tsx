import { Space_Mono } from 'next/font/google';

import '@/assets/styles/globals.scss';

const space_mono = Space_Mono({
    display: 'swap',
    subsets: [ 'latin' ],
    weight: [ '400', '700' ]
});

function RootLayout({ children }: Readonly <{children: React.ReactNode}> ) {
  return (
    <html>
      <body className={space_mono.className}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;