import Menu from './menu/Menu';
import style from './Header.module.scss';

function Header() {
    return (
    <header className={style.Header}>
        <Menu />
    </header>
    );
}

export default Header;