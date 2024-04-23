import type { PropsWithChildren } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout({children}: PropsWithChildren) {
    return (
    <div>
    <Header />
        <main>
            {children}
        </main>
    <Footer />
    </div>
    );
}

export default Layout;