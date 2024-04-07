import Link from 'next/link'

import styles from './Menu.module.scss'

export default function Menu() {
    return <div>
    <nav className = {styles.Menu}>
        <Link href = '/'>
            <h1>Brand</h1>
        </Link>
        <ul>
            <li><Link href = '/'>Home</Link></li>
            <li><Link href = '/releases'>Releases</Link></li>
            <li><Link href = '/tour'>Tours</Link></li>
            <li><Link href = '/merch'>Our merch</Link></li>
        </ul>
    </nav>
    </div>
}