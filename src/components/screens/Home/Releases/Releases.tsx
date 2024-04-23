import Image from 'next/image';

import style from './Releases.module.scss';

function Releases() {
    return (
    <section className={style.Releases} id='releases'>
        <Image className = {style.Title} src = '/Releases.svg' alt = 'Release Title' width = { 700 } height = { 100 } />
            <div className = {style.Container}>
                <div className = {style.Card}>
                    <Image className = {style.Album} src = '/Cover.jpeg' alt = 'Album name' width = { 750 } height = { 750 } />
                </div>
                <div className = {style.Card}>
                    <Image className = {style.Album} src = '/Cover.jpeg' alt = 'Album name' width = { 750 } height = { 750 } />
                </div>
            </div>
    </section>
    );
}

export default Releases;