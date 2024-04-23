import Link from 'next/link';

import style from './Menu.module.scss';

function Menu() {
    return (
    <div>
    <nav className={style.Menu}>
        <Link href='/'>
            <h1>Brand</h1>
        </Link>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='#releases'>Releases</Link></li>
            <li><Link href='#tours'>Tours</Link></li>
        </ul>
    </nav>
    </div>
    );
}

export default Menu;