import styles from './Header.module.scss'
import Menu from './menu/Menu'

export function Header() {
    return <header className = {styles.Header}>
        <Menu />
    </header>
}